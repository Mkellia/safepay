import { Link, useNavigate, useParams } from "react-router-dom";
import { useMemo, useState } from "react";

type PaymentMethod = "mobile-money" | "bank-transfer";

export default function MakePayment() {
  const navigate = useNavigate();
  const { orderId } = useParams();

  // Demo data (later you can fetch from backend / blockchain)
  const details = useMemo(
    () => ({
      orderId: orderId ? `#${orderId}` : "#SP-99284",
      seller: "CryptoGlobal Solutions",
      network: "Polygon (MATIC)",
      status: "Awaiting Payment",
      amount: "4,500.00",
      currency: "USDT",
    }),
    [orderId]
  );

  const [method, setMethod] = useState<PaymentMethod>("mobile-money");

  function onPayNow() {
    alert(
      `Payment initiated (demo)\nOrder: ${details.orderId}\nMethod: ${
        method === "mobile-money" ? "Mobile Money" : "Bank Transfer"
      }\nAmount: ${details.amount} ${details.currency}`
    );

    // After payment in real system, you'd go back to dashboard or order details.
    // Here we send to confirm-delivery flow (demo):
    const cleanOrderId = (orderId ?? "SP-99284").replace(/^#/, "");
    navigate(`/orders/${cleanOrderId}/confirm-delivery`);
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white transition-colors duration-200 min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Top Navigation */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#f0f2f4] dark:border-gray-800 bg-white dark:bg-background-dark px-10 py-3">
            <div className="flex items-center gap-4">
              <div className="size-6 text-primary">
                <span className="material-symbols-outlined text-3xl">shield_with_heart</span>
              </div>
              <Link
                to="/buyer/dashboard"
                className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]"
              >
                SafePay
              </Link>
            </div>

            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <Link
                  className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors"
                  to="/buyer/dashboard"
                >
                  Dashboard
                </Link>
                <Link
                  className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors"
                  to="/orders/new"
                >
                  Orders
                </Link>
                <button
                  type="button"
                  className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors"
                  onClick={() => alert("Transactions page later")}
                >
                  Transactions
                </button>
                <button
                  type="button"
                  className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors"
                  onClick={() => alert("Settings page later")}
                >
                  Settings
                </button>
              </div>

              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-200 dark:border-gray-700"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrHQzZ-v0R3RsNQBgU5vlfK577AX5DbeMdsMhBoZG7kAhZhg-eUAXfCnk0jLx16m7N2rjUhjRLhATQ3V0idmvM2wiUrrdInzFzcK18lyIT_WEwJnqG_CGo6WpTMjeNEthkNlLHrW5yam3evi3n5d09NlDk7GS0SM6w0ISQ4IW8r2u_CSYS9HyULTELCMjZnzuu2wN5pCqq6ij7hEWu7iFwvaYrIalwaqrtMBB5v0CDFdVgsMv0FPUbahT-xmY7fu2wsE0mReQtscQY")',
                }}
                role="img"
                aria-label="User avatar"
              />
            </div>
          </header>

          <div className="px-4 md:px-40 flex flex-1 justify-center py-10">
            <div className="flex flex-col max-w-[800px] flex-1">
              {/* Page Header */}
              <div className="flex flex-col gap-3 mb-8">
                <p className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                  Make Payment
                </p>
                <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">
                  Secure your transaction with our smart contract blockchain escrow
                </p>
              </div>

              {/* Order Summary Card */}
              <div className="bg-white dark:bg-gray-900 border border-[#f0f2f4] dark:border-gray-800 rounded-xl overflow-hidden shadow-sm mb-8">
                <div className="px-6 py-5 border-b border-[#f0f2f4] dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                  <h2 className="text-[#111418] dark:text-white text-lg font-bold">Order Details</h2>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Secure Escrow Active
                  </span>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    <div className="flex justify-between items-center py-1">
                      <p className="text-[#617589] dark:text-gray-400 text-sm font-normal">Order ID</p>
                      <p className="text-[#111418] dark:text-white text-sm font-semibold">
                        {details.orderId}
                      </p>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <p className="text-[#617589] dark:text-gray-400 text-sm font-normal">Seller</p>
                      <p className="text-[#111418] dark:text-white text-sm font-semibold">
                        {details.seller}
                      </p>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <p className="text-[#617589] dark:text-gray-400 text-sm font-normal">Network</p>
                      <p className="text-[#111418] dark:text-white text-sm font-semibold">
                        {details.network}
                      </p>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <p className="text-[#617589] dark:text-gray-400 text-sm font-normal">Status</p>
                      <p className="text-orange-500 text-sm font-semibold">{details.status}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[#f0f2f4] dark:border-gray-800 flex justify-between items-end">
                    <div>
                      <p className="text-[#617589] dark:text-gray-400 text-xs font-medium uppercase mb-1">
                        Total Amount Due
                      </p>
                      <p className="text-[#111418] dark:text-white text-3xl font-black">
                        {details.amount}{" "}
                        <span className="text-primary">{details.currency}</span>
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[#617589] dark:text-gray-400 text-[10px] leading-tight max-w-[200px]">
                        Funds will be held in escrow until you confirm receipt of goods or services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <h2 className="text-[#111418] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6">
                Select Payment Method
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {/* Mobile Money Option */}
                <label
                  className={`relative flex cursor-pointer rounded-xl border-2 p-6 shadow-sm focus:outline-none transition-all ${
                    method === "mobile-money"
                      ? "border-primary bg-primary/5 hover:bg-primary/10"
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/50"
                  }`}
                >
                  <input
                    className="sr-only"
                    name="payment-method"
                    type="radio"
                    value="mobile-money"
                    checked={method === "mobile-money"}
                    onChange={() => setMethod("mobile-money")}
                  />

                  <div className="flex w-full items-start justify-between">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-symbols-outlined text-primary text-3xl">
                          smartphone
                        </span>
                        <span className="text-[#111418] dark:text-white font-bold">
                          Mobile Money
                        </span>
                      </div>
                      <p className="text-[#617589] dark:text-gray-400 text-sm">
                        Instant transfer via M-Pesa, MTN, or Airtel Money. Best for local payments.
                      </p>
                    </div>

                    <span className="material-symbols-outlined text-primary">
                      {method === "mobile-money" ? "check_circle" : "radio_button_unchecked"}
                    </span>
                  </div>
                </label>

                {/* Bank Transfer Option */}
                <label
                  className={`relative flex cursor-pointer rounded-xl border-2 p-6 shadow-sm focus:outline-none transition-all ${
                    method === "bank-transfer"
                      ? "border-primary bg-primary/5 hover:bg-primary/10"
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-primary/50"
                  }`}
                >
                  <input
                    className="sr-only"
                    name="payment-method"
                    type="radio"
                    value="bank-transfer"
                    checked={method === "bank-transfer"}
                    onChange={() => setMethod("bank-transfer")}
                  />

                  <div className="flex w-full items-start justify-between">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-3xl">
                          account_balance
                        </span>
                        <span className="text-[#111418] dark:text-white font-bold">
                          Bank Transfer
                        </span>
                      </div>
                      <p className="text-[#617589] dark:text-gray-400 text-sm">
                        Direct wire transfer from your bank account. May take up to 24 hours to clear.
                      </p>
                    </div>

                    <span className="material-symbols-outlined text-primary">
                      {method === "bank-transfer" ? "check_circle" : "radio_button_unchecked"}
                    </span>
                  </div>
                </label>
              </div>

              {/* Action Button */}
              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={onPayNow}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                >
                  <span className="material-symbols-outlined">lock</span>
                  Pay {details.amount} {details.currency} Now
                </button>

                <p className="text-center text-[#617589] dark:text-gray-400 text-xs flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">verified_user</span>
                  Payments are secured by 256-bit encryption and blockchain verification
                </p>
              </div>

              {/* Footer/Support */}
              <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col items-center gap-4">
                <p className="text-[#617589] dark:text-gray-500 text-sm">Need help with your payment?</p>
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="text-primary text-sm font-semibold flex items-center gap-1"
                    onClick={() => alert("Contact Support (demo)")}
                  >
                    <span className="material-symbols-outlined text-sm">contact_support</span>
                    Contact Support
                  </button>
                  <span className="text-gray-300 dark:text-gray-700">|</span>
                  <button
                    type="button"
                    className="text-primary text-sm font-semibold flex items-center gap-1"
                    onClick={() => alert("Payment FAQ (demo)")}
                  >
                    <span className="material-symbols-outlined text-sm">description</span>
                    Payment FAQ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
