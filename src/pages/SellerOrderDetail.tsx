import { Link, useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";

export default function SellerOrderDetail() {
  const navigate = useNavigate();
  const { orderId } = useParams();

  // Demo data (replace with API / blockchain read later)
  const data = useMemo(
    () => ({
      orderLabel: orderId ? `Order #${orderId}` : "Order #82931",
      orderBreadcrumb: orderId ? `Order #SP-${orderId}` : "Order #SP-82931",
      createdDate: "Oct 24, 2023",
      paidDate: "Oct 25, 2023",
      deliveredHint: "Awaiting tracking",
      statusBadge: "In Progress",

      productTitle: "Professional Graphic Design - Corporate Branding Package",
      productImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAvv6Rw9SoRita-gEB3fyRH6_fwGVtb2QIx7xWY2db7aMjmhJddfNGFVgQJS0udJfEFVzjU0iufePBixwdHBfS_gsH67h8yWYfW45hKuoZ0lU_hl9IMeTiBlqKCl04Y2UqtRcBwNA4sKQN3kH1atU4Bkw3uofPlYYlUA50ToyWou3qBOppgZAm1lbl7UzbAjfcEII51KzMw7xvROGyhZXpDVnrZKKhTjlGeVpdhnyR16XhU8dNCOQIZ49LwINjVyTK_8brGOwguygJv",
      totalPrice: "1.25 ETH",

      buyerAddress: "0x71C...392b",
      escrowContract: "0x892...f71a",

      subtotal: "1.2500 ETH",
      escrowFee: "-0.0062 ETH",
      networkGas: "0.0021 ETH",
      earnings: "~1.2438 ETH",

      activity1Title: "Payment Received",
      activity1Time: "Oct 25, 2023 - 09:12 AM",
      activity2Title: "Awaiting Shipment",
      activity2Time: "Pending your action",
    }),
    [orderId]
  );

  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch {
      alert("Copy failed (browser blocked clipboard).");
    }
  }

  function onDownloadInvoice() {
    alert("Invoice download (demo). Connect to PDF generation later.");
  }

  function onMarkShipped() {
    alert("Marked as shipped (demo). You can add tracking next.");
  }

  function onContactBuyer() {
    alert("Open chat with buyer (demo).");
  }

  function onReportIssue() {
    alert("Report issue (demo).");
  }

  function onOpenEscrowContract() {
    alert("Open block explorer (demo). Add explorer link later.");
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white transition-colors duration-200 min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Top Navigation */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#2d3748] bg-white dark:bg-[#1a202c] px-10 py-3">
            <div className="flex items-center gap-4 text-[#111418] dark:text-white">
              <div className="size-6 text-primary">
                <span className="material-symbols-outlined text-3xl">shield_with_heart</span>
              </div>
              <Link
                to="/seller/dashboard"
                className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]"
              >
                SafePay
              </Link>
            </div>

            <div className="flex flex-1 justify-end gap-8">
              <nav className="flex items-center gap-9">
                <Link
                  className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors"
                  to="/seller/dashboard"
                >
                  Dashboard
                </Link>

                <Link
                  className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors border-b-2 border-primary"
                  to="/seller/orders/SP-82931"
                >
                  Orders
                </Link>

                <button
                  type="button"
                  className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors"
                  onClick={() => alert("Inventory page (demo)")}
                >
                  Inventory
                </button>

                <button
                  type="button"
                  className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors"
                  onClick={() => alert("Disputes page (demo)")}
                >
                  Disputes
                </button>
              </nav>

              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#f0f2f4] dark:bg-[#2d3748] text-[#111418] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => alert("Notifications (demo)")}
                >
                  <span className="material-symbols-outlined">notifications</span>
                </button>

                <button
                  type="button"
                  className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#f0f2f4] dark:bg-[#2d3748] text-[#111418] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => alert("Account menu (demo)")}
                >
                  <span className="material-symbols-outlined">account_circle</span>
                </button>
              </div>
            </div>
          </header>

          <main className="px-4 md:px-40 flex flex-1 justify-center py-8">
            <div className="flex flex-col max-w-[1024px] flex-1 gap-6">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors"
                  to="/seller/dashboard"
                >
                  Home
                </Link>
                <span className="material-symbols-outlined text-sm text-[#617589]">chevron_right</span>
                <Link
                  className="text-[#617589] dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary transition-colors"
                  to="/seller/orders/SP-82931"
                >
                  Orders
                </Link>
                <span className="material-symbols-outlined text-sm text-[#617589]">chevron_right</span>
                <span className="text-[#111418] dark:text-white text-sm font-semibold leading-normal">
                  {data.orderBreadcrumb}
                </span>
              </div>

              {/* Header Actions */}
              <div className="flex flex-wrap justify-between items-end gap-3">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    {data.orderLabel}
                  </h1>
                  <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">
                    Secured by Blockchain Escrow Protocol
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={onDownloadInvoice}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f4] dark:bg-[#2d3748] text-[#111418] dark:text-white text-sm font-bold leading-normal transition-all hover:opacity-80"
                  >
                    <span className="material-symbols-outlined mr-2 text-lg">download</span>
                    <span className="truncate">Invoice</span>
                  </button>

                  <button
                    type="button"
                    onClick={onMarkShipped}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal transition-all hover:brightness-110 shadow-lg shadow-primary/20"
                  >
                    <span className="material-symbols-outlined mr-2 text-lg">local_shipping</span>
                    <span className="truncate">Mark as Shipped</span>
                  </button>
                </div>
              </div>

              {/* Horizontal Status Timeline */}
              <div className="bg-white dark:bg-[#1a202c] p-8 rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm">
                <div className="flex items-center w-full">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center flex-1 relative">
                    <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center z-10">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <div className="absolute left-1/2 top-5 w-full h-[2px] bg-primary"></div>
                    <p className="mt-3 text-sm font-bold text-[#111418] dark:text-white">Created</p>
                    <p className="text-xs text-[#617589] dark:text-gray-400">{data.createdDate}</p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center flex-1 relative">
                    <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center z-10">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <div className="absolute left-1/2 top-5 w-full h-[2px] bg-[#dbe0e6] dark:bg-[#2d3748]"></div>
                    <p className="mt-3 text-sm font-bold text-[#111418] dark:text-white">Paid</p>
                    <p className="text-xs text-[#617589] dark:text-gray-400">{data.paidDate}</p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center flex-1 relative">
                    <div className="size-10 rounded-full bg-white dark:bg-[#1a202c] border-2 border-primary text-primary flex items-center justify-center z-10">
                      <span className="material-symbols-outlined">pending</span>
                    </div>
                    <div className="absolute left-1/2 top-5 w-full h-[2px] bg-[#dbe0e6] dark:bg-[#2d3748]"></div>
                    <p className="mt-3 text-sm font-bold text-primary">Delivered</p>
                    <p className="text-xs text-[#617589] dark:text-gray-400">{data.deliveredHint}</p>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col items-center flex-1">
                    <div className="size-10 rounded-full bg-[#f0f2f4] dark:bg-[#2d3748] border-2 border-transparent text-[#617589] dark:text-gray-500 flex items-center justify-center z-10">
                      <span className="material-symbols-outlined">lock</span>
                    </div>
                    <p className="mt-3 text-sm font-bold text-[#617589] dark:text-gray-500">Released</p>
                    <p className="text-xs text-[#617589] dark:text-gray-500">Pending</p>
                  </div>
                </div>
              </div>

              {/* Info Note */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <span className="material-symbols-outlined text-primary mt-0.5">info</span>
                <div>
                  <p className="text-primary font-bold text-sm">Security Policy</p>
                  <p className="text-[#111418] dark:text-gray-200 text-sm">
                    Funds are securely held in the escrow contract. Payment will be released to your wallet
                    immediately after the buyer confirms the receipt with the unique One-Time Password (OTP)
                    or upon expiration of the dispute window.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Order Information Card */}
                <div className="md:col-span-2 flex flex-col items-stretch justify-start rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm bg-white dark:bg-[#1a202c] overflow-hidden">
                  <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3748] flex justify-between items-center">
                    <p className="text-[#111418] dark:text-white text-lg font-bold">Order Information</p>
                    <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 uppercase tracking-wider">
                      {data.statusBadge}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="size-16 rounded-lg bg-center bg-no-repeat bg-cover flex-shrink-0"
                        style={{ backgroundImage: `url("${data.productImage}")` }}
                        role="img"
                        aria-label="Product image"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#617589] dark:text-gray-400">Product/Service</p>
                        <p className="text-base font-bold text-[#111418] dark:text-white">{data.productTitle}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-[#617589] dark:text-gray-400">Total Price</p>
                        <p className="text-lg font-black text-primary">{data.totalPrice}</p>
                      </div>
                    </div>

                    <hr className="border-[#e5e7eb] dark:border-[#2d3748]" />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-medium text-[#617589] dark:text-gray-400 uppercase mb-1">
                          Buyer Address
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-mono text-[#111418] dark:text-white">{data.buyerAddress}</p>
                          <button
                            type="button"
                            className="material-symbols-outlined text-xs text-[#617589] hover:text-primary"
                            onClick={() => copyText(data.buyerAddress)}
                            aria-label="Copy buyer address"
                          >
                            content_copy
                          </button>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-[#617589] dark:text-gray-400 uppercase mb-1">
                          Escrow Smart Contract
                        </p>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            className="text-sm font-mono text-primary underline"
                            onClick={onOpenEscrowContract}
                          >
                            {data.escrowContract}
                          </button>
                          <span className="material-symbols-outlined text-xs text-primary">open_in_new</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-[#f8fafc] dark:bg-[#2d3748]/30 flex justify-between items-center mt-auto">
                    <button
                      type="button"
                      className="flex items-center gap-2 text-primary text-sm font-bold hover:underline transition-all"
                      onClick={onContactBuyer}
                    >
                      <span className="material-symbols-outlined text-lg">chat_bubble</span>
                      Contact Buyer
                    </button>

                    <button
                      type="button"
                      className="flex items-center gap-2 text-[#617589] dark:text-gray-400 text-sm font-bold hover:text-[#111418] dark:hover:text-white transition-all"
                      onClick={onReportIssue}
                    >
                      <span className="material-symbols-outlined text-lg">report</span>
                      Report Issue
                    </button>
                  </div>
                </div>

                {/* Sidebar Details */}
                <div className="flex flex-col gap-6">
                  {/* Transaction Summary */}
                  <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] p-6 shadow-sm">
                    <h3 className="text-[#111418] dark:text-white font-bold mb-4">Transaction Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-[#617589] dark:text-gray-400">Subtotal</span>
                        <span className="text-[#111418] dark:text-white">{data.subtotal}</span>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-[#617589] dark:text-gray-400">Escrow Fee (0.5%)</span>
                        <span className="text-[#111418] dark:text-white">{data.escrowFee}</span>
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-[#617589] dark:text-gray-400">Network Gas (est.)</span>
                        <span className="text-[#111418] dark:text-white">{data.networkGas}</span>
                      </div>

                      <hr className="border-[#e5e7eb] dark:border-[#2d3748]" />

                      <div className="flex justify-between text-base font-bold">
                        <span className="text-[#111418] dark:text-white">Earnings</span>
                        <span className="text-green-600">{data.earnings}</span>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Timeline */}
                  <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] p-6 shadow-sm">
                    <h3 className="text-[#111418] dark:text-white font-bold mb-4">Recent Activity</h3>

                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="size-2 rounded-full bg-primary"></div>
                          <div className="w-[1px] h-full bg-[#e5e7eb] dark:bg-[#2d3748]"></div>
                        </div>
                        <div className="pb-4">
                          <p className="text-xs font-bold text-[#111418] dark:text-white">{data.activity1Title}</p>
                          <p className="text-[10px] text-[#617589] dark:text-gray-400">{data.activity1Time}</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="size-2 rounded-full bg-[#dbe0e6] dark:bg-gray-600"></div>
                          <div className="w-[1px] h-full border-dashed border-l border-[#e5e7eb] dark:border-[#2d3748]"></div>
                        </div>
                        <div className="pb-4">
                          <p className="text-xs font-bold text-[#617589] dark:text-gray-400">{data.activity2Title}</p>
                          <p className="text-[10px] text-[#617589] dark:text-gray-400">{data.activity2Time}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Optional: back button (nice for routing) */}
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="w-full border border-[#e5e7eb] dark:border-[#2d3748] rounded-lg py-2.5 text-sm font-bold hover:bg-white/50 dark:hover:bg-[#16222e] transition-colors"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-[#e5e7eb] dark:border-[#2d3748] bg-white dark:bg-[#1a202c] py-8">
            <div className="max-w-[1024px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-[#617589] dark:text-gray-400">
                <span className="material-symbols-outlined text-lg">verified_user</span>
                <span className="text-xs">Blockchain Secured Transaction Protocol v2.4</span>
              </div>

              <div className="flex gap-6">
                <button
                  type="button"
                  className="text-xs text-[#617589] dark:text-gray-400 hover:text-primary transition-colors"
                  onClick={() => alert("Terms (demo)")}
                >
                  Terms of Service
                </button>
                <button
                  type="button"
                  className="text-xs text-[#617589] dark:text-gray-400 hover:text-primary transition-colors"
                  onClick={() => alert("Privacy (demo)")}
                >
                  Privacy Policy
                </button>
                <button
                  type="button"
                  className="text-xs text-[#617589] dark:text-gray-400 hover:text-primary transition-colors"
                  onClick={() => alert("Escrow rules (demo)")}
                >
                  Escrow Rules
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
