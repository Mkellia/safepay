import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Demo navigation (replace with real auth later)
    // If identifier includes "seller" go seller dashboard else buyer dashboard
    if (identifier.toLowerCase().includes("seller")) {
      navigate("/seller/dashboard");
    } else {
      navigate("/buyer/dashboard");
    }
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Header / Nav */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dbe0e6] dark:border-gray-800 bg-white dark:bg-background-dark px-6 md:px-10 py-3 z-10">
          <div className="flex items-center gap-4 text-primary">
            <div className="size-8">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_535)">
                  <path
                    clipRule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_535">
                    <rect fill="white" height="48" width="48" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <Link to="/" className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
              SafePay
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
                How it Works
              </a>
              <a className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
                Security
              </a>
              <a className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
                Support
              </a>
            </div>

            <button
              type="button"
              className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90"
              onClick={() => navigate("/login")}
            >
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </header>

        <main className="flex-1 flex flex-col md:flex-row">
          {/* Left Column: Illustration & Marketing */}
          <div className="hidden md:flex flex-1 flex-col justify-center items-center bg-primary/5 dark:bg-primary/10 p-12 lg:p-24">
            <div className="max-w-[540px] space-y-8">
              <div className="w-full aspect-square rounded-2xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                <img
                  alt="Blockchain visualization"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU5WkAAfxkH9GtjkBLSsxKfNr-sTaI92ugsczMq7evxraR8E5miFaKbQxNojNmQ3Cyrak4_cuoVKZq1v2cZHIdVIDRCgS4SSmU-qADhYxckKUMzDQPzBONnB7HC4uiNA_0ZFKdHhWCq4twznhtfe_DJjMN1HqRss-taGjtHpdpbkwwwEfUNEQet28KLMXYPRhAZlDOBd04JqUfr2PtFZpG_wWgK5PtIzaGwhCT7idtcO-0uxYzxlv_YhnNdq0Dk2JJ9e7IG8wJ2qFE"
                />
              </div>

              <div className="space-y-4">
                <h1 className="text-[#111418] dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                  Secure Blockchain Escrow for Peace of Mind
                </h1>
                <p className="text-[#617589] dark:text-gray-400 text-lg leading-relaxed">
                  SafePay ensures your funds are protected using smart contract technology. Eliminate counterparty risk and trade with confidence globally.
                </p>

                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <span className="material-symbols-outlined text-lg">verified_user</span>
                    Fully Decentralized
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <span className="material-symbols-outlined text-lg">lock</span>
                    Encrypted Transactions
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Login Form */}
          <div className="flex-1 flex flex-col justify-center bg-white dark:bg-background-dark p-6 md:p-12 lg:p-24">
            <div className="max-w-[420px] w-full mx-auto space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-[#111418] dark:text-white">Welcome Back</h2>
                <p className="text-[#617589] dark:text-gray-400">
                  Log in to manage your escrow accounts and active trades.
                </p>
              </div>

              <form className="space-y-5" onSubmit={onSubmit}>
                {/* Email/Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#111418] dark:text-gray-200" htmlFor="identifier">
                    Phone or Email
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      mail
                    </span>
                    <input
                      id="identifier"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800/50 text-[#111418] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      placeholder="Enter your phone or email"
                      type="text"
                      autoComplete="username"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium text-[#111418] dark:text-gray-200" htmlFor="password">
                      Password
                    </label>
                    <button type="button" className="text-sm font-semibold text-primary hover:underline">
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      lock
                    </span>

                    <input
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800/50 text-[#111418] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                      placeholder="••••••••"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                    />

                    <button
                      type="button"
                      className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-primary"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? "visibility_off" : "visibility"}
                    </button>
                  </div>
                </div>

                {/* Remember */}
                <div className="flex items-center gap-2">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label className="text-sm text-[#617589] dark:text-gray-400" htmlFor="remember">
                    Remember me for 30 days
                  </label>
                </div>

                {/* Submit */}
                <button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span>Log In</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>

                {/* Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#dbe0e6] dark:border-gray-700" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white dark:bg-background-dark px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>

                {/* OAuth buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className="flex items-center justify-center gap-2 py-2.5 border border-[#dbe0e6] dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    type="button"
                    onClick={() => alert("Google login later")}
                  >
                    <img
                      alt="Google"
                      className="w-5 h-5"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl7ylXYp5zCttaaPM0nYIwUiqBFYtfJIaPxnhHrGtSgJhD9GW12QRkObhQ9MoFEtd1nKe9UQDBKBoyksPlrvgnVWAlbhsbcAStmhE4LutxYOMMBVCOw-y3fL6NqE6HFZmHlqCSTbiDWy-tH22ic8WyaOgE1G69-4IY77cbdp10o5JsPDS4uif25Ked6i4VeSvpMHMoQWxg1-QXEM9SosoWFcaG_ucqaiqeCqishp7GNeS1qKlcdpn94YqgbOcdZxrkM1d9UIUm0ipW"
                    />
                    <span className="text-sm font-medium text-[#111418] dark:text-white">Google</span>
                  </button>

                  <button
                    className="flex items-center justify-center gap-2 py-2.5 border border-[#dbe0e6] dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    type="button"
                    onClick={() => alert("Wallet connect later")}
                  >
                    <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                    <span className="text-sm font-medium text-[#111418] dark:text-white">Wallet</span>
                  </button>
                </div>
              </form>

              <p className="text-center text-sm text-[#617589] dark:text-gray-400">
                Don&apos;t have an account?{" "}
                <button type="button" className="font-bold text-primary hover:underline" onClick={() => alert("Signup page later")}>
                  Create an account
                </button>
              </p>
            </div>

            {/* Footer (right col) */}
            <div className="mt-auto pt-10 text-center text-xs text-gray-400">
              <p>© 2024 SafePay Escrow Solutions. All rights reserved.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
