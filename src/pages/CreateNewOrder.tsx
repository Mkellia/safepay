import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

function randomOtp() {
  // 6 digits
  return Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join("");
}

export default function CreateNewOrder() {
  const navigate = useNavigate();

  const [sellerId, setSellerId] = useState("");
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USDT");
  const [otp, setOtp] = useState(() => randomOtp());

  const otpDigits = useMemo(() => otp.split(""), [otp]);

  function onGenerateOtp() {
    setOtp(randomOtp());
  }

  async function onCopyOtp() {
    try {
      await navigator.clipboard.writeText(otp);
      alert("OTP copied!");
    } catch {
      alert("Could not copy OTP. Copy manually: " + otp);
    }
  }

  function onCreate() {
    if (!sellerId.trim() || !itemName.trim() || !amount.trim()) {
      alert("Please fill: Seller ID, Item Name, Amount.");
      return;
    }

    alert(`Escrow created (demo)\nSeller: ${sellerId}\nItem: ${itemName}\nAmount: ${amount} ${currency}\nOTP: ${otp}`);
    // Go to confirm delivery page (using a demo order id)
    navigate(`/orders/SP-99210/confirm-delivery`);
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen text-[#111418] dark:text-white">
      <div className="layout-container flex min-h-screen grow flex-col">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dbe0e6] dark:border-[#2d3748] px-10 py-3 bg-white dark:bg-[#1a222c]">
          <div className="flex items-center gap-4 text-primary">
            <div className="size-8">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <Link to="/buyer/dashboard" className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              SafePay
            </Link>
          </div>

          <div className="flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9">
              <Link className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/buyer/dashboard">
                Dashboard
              </Link>
              <Link className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/orders/new">
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
                onClick={() => alert("Support page later")}
              >
                Support
              </button>
            </nav>

            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-200"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIiFKAX-2vZs3bfvBNUpxZvao1JByjsONE4UwjlBOERMsx2AAX_U0rAzai89SoswM02MySC2A0Jlj9byt_yd0wUAFJs1Ag7GfIuJIXi_kbrfSs9ZSjWOZVQ3oAm7c2s7dIvbYeq66GrL1TytGINh0xs7xW_UZ08vnwpV-YviKWDkHYeVy5rmlYTrVj5ZabBkAMcUQ3ad6Y0n2J8bpEzLOKfoowdBRF1nkOord9F2DoCusQhtdnoMG6dD-EGW4M4sCU9C7943v-JfiJ")',
              }}
              role="img"
              aria-label="User avatar"
            />
          </div>
        </header>

        <main className="flex flex-1 justify-center py-10 px-4">
          <div className="flex flex-col max-w-[560px] flex-1">
            <div className="bg-white dark:bg-[#1a222c] rounded-xl shadow-sm border border-[#dbe0e6] dark:border-[#2d3748] p-8">
              <div className="text-center mb-8">
                <h1 className="text-[#111418] dark:text-white tracking-tight text-3xl font-bold leading-tight">
                  Create New Order
                </h1>
                <p className="text-[#617589] dark:text-gray-400 mt-2">
                  Secure your transaction with blockchain escrow
                </p>
              </div>

              <div className="space-y-6">
                {/* Seller Identifier */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#111418] dark:text-gray-200 text-sm font-semibold leading-normal">
                    Seller Phone or Wallet ID
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#617589]">
                      person
                    </span>
                    <input
                      className="w-full rounded-lg text-[#111418] dark:text-white focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-[#2d3748] bg-white dark:bg-[#101922] h-12 pl-10 pr-4 placeholder:text-[#617589] text-base font-normal transition-all outline-none"
                      placeholder="Enter seller's identifier"
                      value={sellerId}
                      onChange={(e) => setSellerId(e.target.value)}
                    />
                  </div>
                </div>

                {/* Item Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#111418] dark:text-gray-200 text-sm font-semibold leading-normal">
                    Item Name
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#617589]">
                      shopping_bag
                    </span>
                    <input
                      className="w-full rounded-lg text-[#111418] dark:text-white focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-[#2d3748] bg-white dark:bg-[#101922] h-12 pl-10 pr-4 placeholder:text-[#617589] text-base font-normal transition-all outline-none"
                      placeholder="What are you buying?"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Amount Section */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#111418] dark:text-gray-200 text-sm font-semibold leading-normal">
                    Amount
                  </label>

                  <div className="flex w-full items-stretch rounded-lg">
                    <div className="relative flex-1">
                      <input
                        className="w-full rounded-l-lg text-[#111418] dark:text-white focus:ring-2 focus:ring-primary/50 border border-[#dbe0e6] dark:border-[#2d3748] bg-white dark:bg-[#101922] h-12 px-4 placeholder:text-[#617589] text-base font-normal border-r-0 transition-all outline-none"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>

                    <button
                      type="button"
                      className="flex items-center px-4 bg-gray-50 dark:bg-[#2d3748] border border-[#dbe0e6] dark:border-[#2d3748] rounded-r-lg border-l-0 text-[#617589] dark:text-gray-300 font-medium"
                      onClick={() => setCurrency((c) => (c === "USDT" ? "ETH" : "USDT"))}
                      title="Click to switch currency (demo)"
                    >
                      <span className="mr-2">{currency}</span>
                      <span className="material-symbols-outlined text-sm">expand_more</span>
                    </button>
                  </div>
                </div>

                {/* OTP Section */}
                <div className="mt-8 pt-8 border-t border-[#dbe0e6] dark:border-[#2d3748]">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-[#111418] dark:text-gray-200 text-sm font-semibold leading-normal">
                      Security Verification
                    </label>

                    <button
                      type="button"
                      className="text-primary text-sm font-semibold hover:underline flex items-center gap-1"
                      onClick={onGenerateOtp}
                    >
                      <span className="material-symbols-outlined text-sm">refresh</span>
                      Generate OTP
                    </button>
                  </div>

                  <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 border border-primary/20 flex flex-col items-center">
                    <div className="flex gap-2 mb-3">
                      {otpDigits.map((d, i) => (
                        <div
                          key={i}
                          className="w-10 h-12 bg-white dark:bg-[#101922] border-2 border-primary/30 rounded-lg flex items-center justify-center text-xl font-bold text-primary"
                        >
                          {d}
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="flex items-center gap-2 text-[#617589] dark:text-gray-400 text-xs hover:text-primary transition-colors"
                      onClick={onCopyOtp}
                    >
                      <span className="material-symbols-outlined text-base">content_copy</span>
                      Click to copy OTP
                    </button>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  type="button"
                  onClick={onCreate}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <span>Create Escrow Order</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>

                <p className="text-center text-xs text-[#617589] dark:text-gray-500 px-4">
                  By creating this order, you agree to SafePay&apos;s terms of service. Funds will be held in a secure smart contract until delivery is confirmed.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
