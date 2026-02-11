import { Link, useNavigate, useParams } from "react-router-dom";
import { useMemo, useRef, useState } from "react";

export default function ConfirmDelivery() {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const [digits, setDigits] = useState<string[]>(["", "", "", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const code = useMemo(() => digits.join(""), [digits]);
  const isComplete = code.length === 6 && digits.every((d) => d.length === 1);

  function setDigit(index: number, value: string) {
    const v = value.replace(/\D/g, "").slice(-1); // only last digit
    setDigits((prev) => {
      const next = [...prev];
      next[index] = v;
      return next;
    });

    if (v && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function onKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace") {
      if (digits[index]) {
        setDigit(index, "");
        return;
      }
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
    if (e.key === "ArrowLeft" && index > 0) inputsRef.current[index - 1]?.focus();
    if (e.key === "ArrowRight" && index < 5) inputsRef.current[index + 1]?.focus();
  }

  function onConfirm() {
    if (!isComplete) {
      alert("Enter the full 6-digit code.");
      return;
    }
    alert(`Delivery confirmed for ${orderId ?? "this order"} (demo)\nCode: ${code}`);
    // After confirm, go to buyer dashboard
    navigate("/buyer/dashboard");
  }

  function onOpenDispute() {
    navigate("/buyer/disputes");
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white transition-colors duration-200 min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Top Navigation */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dbe0e6] dark:border-gray-800 bg-white dark:bg-[#1a2632] px-6 md:px-10 py-3">
            <div className="flex items-center gap-4 text-primary">
              <div className="size-6">
                <span className="material-symbols-outlined text-3xl font-bold">shield_with_heart</span>
              </div>
              <Link to="/buyer/dashboard" className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                SafePay
              </Link>
            </div>

            <div className="flex flex-1 justify-end gap-8">
              <div className="hidden md:flex items-center gap-9">
                <Link className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/buyer/dashboard">
                  Dashboard
                </Link>
                <Link className="text-primary text-sm font-bold leading-normal border-b-2 border-primary pb-1" to="/orders/new">
                  Escrow
                </Link>
                <Link className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/buyer/disputes">
                  Disputes
                </Link>
                <button
                  type="button"
                  className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors"
                  onClick={() => alert("Profile page later")}
                >
                  Profile
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex size-10 items-center justify-center overflow-hidden rounded-lg bg-[#f0f2f4] dark:bg-gray-800 text-[#111418] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => alert("Notifications (demo)")}
                >
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <button
                  type="button"
                  className="flex size-10 items-center justify-center overflow-hidden rounded-lg bg-[#f0f2f4] dark:bg-gray-800 text-[#111418] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => alert("Account (demo)")}
                >
                  <span className="material-symbols-outlined">account_circle</span>
                </button>
              </div>
            </div>
          </header>

          {/* Main Content Section */}
          <main className="flex flex-1 justify-center py-10 px-4">
            <div className="flex flex-col max-w-[560px] flex-1">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between px-4 mb-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Deposit</span>
                </div>
                <div className="flex-1 h-0.5 bg-primary mx-2 mb-6"></div>
                <div className="flex flex-col items-center gap-2">
                  <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Shipping</span>
                </div>
                <div className="flex-1 h-0.5 bg-primary/30 mx-2 mb-6"></div>
                <div className="flex flex-col items-center gap-2">
                  <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold ring-4 ring-primary/20">
                    3
                  </div>
                  <span className="text-xs font-bold text-primary">Delivery</span>
                </div>
              </div>

              {/* Card Container */}
              <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-[#dbe0e6] dark:border-gray-800 p-8 flex flex-col items-center">
                <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">local_shipping</span>
                </div>

                <h1 className="text-[#111418] dark:text-white text-[28px] md:text-[32px] font-bold leading-tight text-center pb-2">
                  Confirm Delivery
                </h1>

                <p className="text-[#64748b] dark:text-gray-400 text-base font-normal leading-normal pb-8 text-center max-w-[400px]">
                  Please enter the 6-digit confirmation code provided by the seller to release the{" "}
                  <span className="text-primary font-semibold">0.45 ETH</span> from escrow.
                </p>

                {/* OTP Input Group */}
                <div className="flex justify-center w-full mb-8">
                  <fieldset className="relative flex gap-3 md:gap-4">
                    {digits.map((d, i) => (
                      <input
                        key={i}
                        ref={(el) => {
                          inputsRef.current[i] = el;
                        }}
                        className="flex h-14 w-10 md:w-14 text-center focus:outline-0 focus:ring-2 focus:ring-primary/50 border-0 border-b-2 border-[#dbe0e6] dark:border-gray-700 bg-transparent dark:text-white text-xl font-bold leading-normal"
                        inputMode="numeric"
                        maxLength={1}
                        placeholder="·"
                        value={d}
                        onChange={(e) => setDigit(i, e.target.value)}
                        onKeyDown={(e) => onKeyDown(i, e)}
                      />
                    ))}
                  </fieldset>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4 w-full max-w-[400px]">
                  <button
                    type="button"
                    onClick={onConfirm}
                    className="flex w-full items-center justify-center overflow-hidden rounded-lg h-14 px-5 bg-primary hover:bg-primary/90 text-white text-lg font-bold transition-all shadow-lg shadow-primary/20 disabled:opacity-60"
                    disabled={!isComplete}
                  >
                    <span className="truncate">Confirm Delivery</span>
                  </button>

                  <div className="flex items-center gap-2 py-2">
                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
                    <span className="text-xs text-gray-400 font-medium px-2">HAVING ISSUES?</span>
                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
                  </div>

                  <button
                    type="button"
                    onClick={onOpenDispute}
                    className="flex w-full items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#fef2f2] dark:bg-red-900/20 text-[#ef4444] hover:bg-red-100 dark:hover:bg-red-900/30 text-base font-bold transition-colors border border-red-100 dark:border-red-900/50"
                  >
                    <span className="material-symbols-outlined mr-2">gavel</span>
                    <span className="truncate">Open Dispute</span>
                  </button>
                </div>
              </div>

              {/* Footer Info */}
              <div className="mt-8 flex flex-col gap-6">
                <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <span className="material-symbols-outlined text-primary">info</span>
                  <div>
                    <p className="text-sm font-semibold text-[#111418] dark:text-white">What happens next?</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Once confirmed, the smart contract will immediately release the funds to the seller. This action cannot be undone.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 text-gray-400">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    <span className="text-xs uppercase tracking-wider font-bold">Secure Blockchain Transaction</span>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <footer className="mt-auto py-8 text-center text-gray-400 text-sm border-t border-[#dbe0e6] dark:border-gray-800">
            <p>© 2024 SafePay Blockchain Escrow. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
