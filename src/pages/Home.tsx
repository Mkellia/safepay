import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white transition-colors duration-200 min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#f0f2f4] dark:border-gray-800 px-6 md:px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
            <div className="flex items-center gap-2">
              <div className="text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">lock</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-[#111418] dark:text-white">
                SafePay
              </h2>
            </div>

            <div className="flex flex-1 justify-end gap-6 items-center">
              <nav className="hidden md:flex items-center gap-7">
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">
                  About
                </a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#how">
                  How It Works
                </a>
                <a className="text-sm font-medium hover:text-primary transition-colors" href="#contact">
                  Contact
                </a>
              </nav>

              <div className="flex gap-2">
                <Link
                  to="/login"
                  className="hidden sm:flex min-w-[72px] items-center justify-center rounded-lg h-9 px-4 bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white text-xs font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Login
                </Link>

                <Link
                  to="/login"
                  className="flex min-w-[90px] items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-xs font-bold hover:opacity-90 transition-opacity shadow-sm"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1">
            <div className="max-w-[1200px] mx-auto px-6 md:px-10">
              <div className="flex flex-col gap-6 py-8 md:py-12 lg:flex-row lg:items-center">
                <div className="flex flex-col gap-5 lg:w-3/5">
                  <div className="flex flex-col gap-3">
                    <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-[#111418] dark:text-white">
                      Secure payments. Released on delivery.
                    </h1>
                    <p className="text-base md:text-lg font-normal text-gray-600 dark:text-gray-400 max-w-[440px]">
                      The simplest blockchain escrow for modern commerce. Transparent, protected transactions for everyone.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/login"
                      className="flex min-w-[140px] items-center justify-center rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-md"
                    >
                      Get Started
                    </Link>
                    <a
                      href="#how"
                      className="flex min-w-[140px] items-center justify-center rounded-lg h-11 px-6 border border-primary/20 bg-primary/5 text-primary text-sm font-bold hover:bg-primary/10 transition-colors"
                    >
                      View Demo
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white dark:border-background-dark overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          alt="User"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCejz0_1gpe3sLrk_lgoVikBz5ZBW5JIkJ66O-lmpuS6bivgZxS099Mu_B79Dnu_hOnlghoDVtknCO_tGIRDvLr8ptfK9phwkhz0cVT4BPc-RaUe8FxnvMOcWFN3JsDnapGJJuSgz-4N8u9Z2-TsNWmS9zjyefMjaWjOfwqPu1IWx-MczYRXhxmidDCZH--Gqd9okUja-uPk_y8_IRtl9dODJrPqfChkxxFuNn0dkrOYgajRSTr4unc7BMzpmm_hnjci0M9HGq2Fg93"
                        />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-green-100 border-2 border-white dark:border-background-dark overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          alt="User"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDATAs5RFZVmKaLQFpmCQrT6mVjRH1re2LcwL7FvonX52Zw__4T-7zdlJNprTt4vcWa4wiF3fCEtdvEhvuRxKiLHdqETYB8yNxPVkElXIFqAkb4V6vGGyH8tYzycTtsmtOW8lt0GPbYYfCjRGlGcKYiPyRi7JCG8nhxcpaoRfJDZd-hX6VMIVYI5JZtCgA9D_jYxAmQOG5unCcsopvvzyElQLt8kpC8kFimqKs72KQM4jY5OvUa27R0dGeEspFkusm4WGjnbqqVdtcI"
                        />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-yellow-100 border-2 border-white dark:border-background-dark overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          alt="User"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCASuk2b9kGFfcVPd3TeXlh9kVxAluA7NPI2MApt0eZMWCCRiSxgy7pxQATd8G5O_yJ9CyEGL-GqZxhyqK2k4GmHW8TwYVMdb5xuIX5JpeKvEl3_dD2gUZWlhbdS_gufq8dG9HZ_UuqCeGZsfxrx3JWcrfYtaTUwxwcXzkh2kq4VmdAeOVFWntribSWTB66wOwumNLxRfnnCxASirA_RtTEN5yZdtF1Dxunr3vd9jkpAgQ0OAJylOmUFjr8F_U0IUTOwmmulMlo0ZdK"
                        />
                      </div>
                    </div>
                    <span>Trusted by 10,000+ users</span>
                  </div>
                </div>

                <div className="lg:w-2/5 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-[380px] aspect-[4/3] bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl overflow-hidden border border-white/20">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div className="w-full h-full rounded-xl bg-white dark:bg-gray-800 shadow-lg p-4 flex flex-col gap-3">
                        <div className="flex justify-between items-center border-b pb-2 dark:border-gray-700">
                          <div className="text-sm font-bold">Escrow Protection</div>
                          <span className="px-2 py-0.5 bg-blue-100 text-primary rounded text-[10px] font-bold">
                            SECURE
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="h-2.5 w-3/4 bg-gray-100 dark:bg-gray-700 rounded" />
                          <div className="h-2.5 w-1/2 bg-gray-100 dark:bg-gray-700 rounded" />
                        </div>

                        <div className="mt-auto h-12 w-full bg-primary/5 rounded-lg border border-dashed border-primary/30 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-2xl">verified</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-1">
                          <div className="h-7 bg-gray-50 dark:bg-gray-700 rounded" />
                          <div className="h-7 bg-primary rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section id="how" className="bg-white dark:bg-background-dark/50 py-8 border-y border-gray-100 dark:border-gray-800">
              <div className="max-w-[1200px] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="group flex items-start gap-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 hover:border-primary/30 transition-all duration-300">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-2xl">security</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-md font-bold leading-tight">Smart Escrow</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">
                        Funds are held securely until terms are met.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 hover:border-primary/30 transition-all duration-300">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-2xl">pin</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-md font-bold leading-tight">OTP Release</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">
                        Instant payment release via secure delivery codes.
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 hover:border-primary/30 transition-all duration-300">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-2xl">gavel</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-md font-bold leading-tight">Arbiter Support</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">
                        Fair dispute resolution on the blockchain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-10">
              <div className="max-w-[1200px] mx-auto px-6 md:px-10">
                <div className="bg-primary rounded-2xl p-8 md:p-10 text-center relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-8 -mt-8 blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-8 -mb-8 blur-2xl" />
                  <div className="relative z-10 flex flex-col items-center gap-6">
                    <h2 className="text-2xl md:text-3xl font-black text-white leading-tight max-w-[500px]">
                      Ready to secure your first transaction?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                      <Link
                        to="/login"
                        className="flex min-w-[160px] items-center justify-center rounded-lg h-11 px-6 bg-white text-primary text-sm font-bold hover:bg-gray-100 transition-colors shadow-lg"
                      >
                        Get Started Now
                      </Link>
                      <a
                        href="#contact"
                        className="flex min-w-[160px] items-center justify-center rounded-lg h-11 px-6 border border-white/40 text-white text-sm font-bold hover:bg-white/10 transition-colors"
                      >
                        Contact Sales
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer id="contact" className="bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">lock</span>
                  </div>
                  <h2 className="text-md font-bold tracking-tight">SafePay</h2>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6">
                  <a className="text-gray-500 hover:text-primary transition-colors text-xs font-medium" href="#">
                    Privacy
                  </a>
                  <a className="text-gray-500 hover:text-primary transition-colors text-xs font-medium" href="#">
                    Terms
                  </a>
                  <a className="text-gray-500 hover:text-primary transition-colors text-xs font-medium" href="#">
                    Support
                  </a>
                </div>

                <div className="flex gap-4">
                  <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-lg">share</span>
                  </a>
                  <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                    <span className="material-symbols-outlined text-lg">public</span>
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-50 dark:border-gray-800 text-center">
                <p className="text-gray-400 text-[10px]">
                  © 2024 SafePay Blockchain Escrow. Secure &amp; Concise.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
