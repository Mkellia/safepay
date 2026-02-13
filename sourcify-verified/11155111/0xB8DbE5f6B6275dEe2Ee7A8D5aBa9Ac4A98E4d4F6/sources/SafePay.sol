// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SafePayEscrow is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    enum Status {
        Created,
        Funded,
        Delivered,
        Released,
        Disputed,
        Refunded,
        Cancelled,
        Expired
    }

    struct Order {
        address buyer;
        address seller;
        address token; // address(0) = ETH
        uint256 amount;
        bytes32 otpHash;
        Status status;
        uint256 createdAt;
        uint256 fundedAt;
        uint256 expiresAt;
        string disputeReason;
    }

    uint256 public nextOrderId = 1;
    uint256 public constant ORDER_EXPIRATION = 7 days;

    mapping(uint256 => Order) public orders;

    // -------- Events --------
    event OrderCreated(uint256 indexed orderId, address buyer, address seller, address token, uint256 amount);
    event OrderFunded(uint256 indexed orderId, address buyer, address token, uint256 amount);
    event DeliveryMarked(uint256 indexed orderId, address seller);
    event PaymentReleased(uint256 indexed orderId, address seller, address token, uint256 amount);
    event DisputeOpened(uint256 indexed orderId, address buyer, string reason);
    event Refunded(uint256 indexed orderId, address buyer, address token, uint256 amount);
    event OrderCancelled(uint256 indexed orderId, address buyer);
    event OrderExpired(uint256 indexed orderId);

    constructor() Ownable(msg.sender) {}

    // -------- Modifiers --------
    modifier orderExists(uint256 orderId) {
        require(orderId > 0 && orderId < nextOrderId, "Order not found");
        _;
    }

    modifier onlyBuyer(uint256 orderId) {
        require(msg.sender == orders[orderId].buyer, "Only buyer");
        _;
    }

    modifier onlySeller(uint256 orderId) {
        require(msg.sender == orders[orderId].seller, "Only seller");
        _;
    }

    modifier inStatus(uint256 orderId, Status s) {
        require(orders[orderId].status == s, "Invalid status");
        _;
    }

    // -------- OTP HELPERS (NEW) --------

    /// @notice Returns the keccak256 hash of a string OTP
    function getOtpHash(string calldata otp) external pure returns (bytes32) {
        return keccak256(abi.encodePacked(otp));
    }

    /// @notice Debug helper to compare stored vs computed OTP hash
    function debugOtp(
        uint256 orderId,
        string calldata otp
    ) external view returns (bytes32 stored, bytes32 computed) {
        return (
            orders[orderId].otpHash,
            keccak256(abi.encodePacked(otp))
        );
    }

    // -------- Create Order --------
    function createOrder(
        address seller,
        address token,
        uint256 amount,
        bytes32 otpHash
    ) external returns (uint256 orderId) {
        require(seller != address(0), "Seller required");
        require(seller != msg.sender, "Buyer cannot be seller");
        require(amount > 0, "Amount must be > 0");
        require(otpHash != bytes32(0), "OTP hash required");

        orderId = nextOrderId++;

        orders[orderId] = Order({
            buyer: msg.sender,
            seller: seller,
            token: token,
            amount: amount,
            otpHash: otpHash,
            status: Status.Created,
            createdAt: block.timestamp,
            fundedAt: 0,
            expiresAt: block.timestamp + ORDER_EXPIRATION,
            disputeReason: ""
        });

        emit OrderCreated(orderId, msg.sender, seller, token, amount);
    }

    // -------- Fund Order (ETH) --------
    function fundOrderETH(uint256 orderId)
        external
        payable
        nonReentrant
        orderExists(orderId)
        onlyBuyer(orderId)
        inStatus(orderId, Status.Created)
    {
        Order storage o = orders[orderId];
        require(o.token == address(0), "Not ETH order");
        require(msg.value == o.amount, "Incorrect ETH amount");
        require(block.timestamp < o.expiresAt, "Order expired");

        o.status = Status.Funded;
        o.fundedAt = block.timestamp;

        emit OrderFunded(orderId, msg.sender, address(0), msg.value);
    }

    // -------- Fund Order (ERC20) --------
    function fundOrderToken(uint256 orderId)
        external
        nonReentrant
        orderExists(orderId)
        onlyBuyer(orderId)
        inStatus(orderId, Status.Created)
    {
        Order storage o = orders[orderId];
        require(o.token != address(0), "Not token order");
        require(block.timestamp < o.expiresAt, "Order expired");

        IERC20(o.token).safeTransferFrom(msg.sender, address(this), o.amount);

        o.status = Status.Funded;
        o.fundedAt = block.timestamp;

        emit OrderFunded(orderId, msg.sender, o.token, o.amount);
    }

    // -------- Seller Marks Delivered --------
    function markDelivered(uint256 orderId)
        external
        orderExists(orderId)
        onlySeller(orderId)
    {
        require(orders[orderId].status == Status.Funded, "Not funded");
        orders[orderId].status = Status.Delivered;
        emit DeliveryMarked(orderId, msg.sender);
    }

    // -------- Buyer Confirms OTP & Releases --------
    function confirmDeliveryOTP(uint256 orderId, string calldata otp)
        external
        nonReentrant
        orderExists(orderId)
        onlyBuyer(orderId)
    {
        Order storage o = orders[orderId];
        require(
            o.status == Status.Funded || o.status == Status.Delivered,
            "Not releasable"
        );
        require(
            keccak256(abi.encodePacked(otp)) == o.otpHash,
            "Invalid OTP"
        );

        o.status = Status.Released;
        _payout(o.seller, o.token, o.amount);

        emit PaymentReleased(orderId, o.seller, o.token, o.amount);
    }

    // -------- Dispute Flow --------
    function openDispute(uint256 orderId, string calldata reason)
        external
        orderExists(orderId)
        onlyBuyer(orderId)
    {
        require(
            orders[orderId].status == Status.Funded ||
            orders[orderId].status == Status.Delivered,
            "Dispute not allowed"
        );

        orders[orderId].status = Status.Disputed;
        orders[orderId].disputeReason = reason;

        emit DisputeOpened(orderId, msg.sender, reason);
    }

    function resolveDispute(uint256 orderId, bool refundBuyer)
        external
        nonReentrant
        onlyOwner
        orderExists(orderId)
        inStatus(orderId, Status.Disputed)
    {
        Order storage o = orders[orderId];

        if (refundBuyer) {
            o.status = Status.Refunded;
            _payout(o.buyer, o.token, o.amount);
            emit Refunded(orderId, o.buyer, o.token, o.amount);
        } else {
            o.status = Status.Released;
            _payout(o.seller, o.token, o.amount);
            emit PaymentReleased(orderId, o.seller, o.token, o.amount);
        }
    }

    // -------- Cancel / Expire --------
    function cancelOrder(uint256 orderId)
        external
        orderExists(orderId)
        onlyBuyer(orderId)
        inStatus(orderId, Status.Created)
    {
        orders[orderId].status = Status.Cancelled;
        emit OrderCancelled(orderId, msg.sender);
    }

    function checkExpiredOrders() external onlyOwner {
        for (uint256 i = 1; i < nextOrderId; i++) {
            if (
                orders[i].status == Status.Created &&
                block.timestamp >= orders[i].expiresAt
            ) {
                orders[i].status = Status.Expired;
                emit OrderExpired(i);
            }
        }
    }

    // -------- Internal Payout --------
    function _payout(address to, address token, uint256 amount) internal {
        require(to != address(0), "Invalid recipient");
        if (token == address(0)) {
            (bool ok, ) = payable(to).call{value: amount}("");
            require(ok, "ETH transfer failed");
        } else {
            IERC20(token).safeTransfer(to, amount);
        }
    }

    receive() external payable {}
}