import { Link, useNavigate } from "react-router-dom";

type OrderStatus = "Escrowed" | "Released" | "Delivered" | "Disputed";

type SellerOrderRow = {
  buyer: string;
  item: string;
  amountEth: string;
  amountUsd: string;
  status: OrderStatus;
  hash: string;
  avatarGradient: string; // tailwind gradient utility
};

const demoOrders: SellerOrderRow[] = [
  {
    buyer: "0x71C...492d",
    item: "Cloud Hosting (12 mo)",
    amountEth: "2.45 ETH",
    amountUsd: "$5,120.00",
    status: "Escrowed",
    hash: "0x8a2...f31e",
    avatarGradient: "from-primary to-blue-300",
  },
  {
    buyer: "0x4a2...99bc",
    item: "UI/UX Design Kit",
    amountEth: "0.85 ETH",
    amountUsd: "$1,780.00",
    status: "Released",
    hash: "0x12c...456d",
    avatarGradient: "from-purple-500 to-pink-300",
  },
  {
    buyer: "0xfe2...128a",
    item: "Smart Contract Audit",
    amountEth: "5.00 ETH",
    amountUsd: "$10,450.00",
    status: "Delivered",
    hash: "0x992...31ac",
    avatarGradient: "from-orange-400 to-yellow-200",
  },
  {
    buyer: "0xbb2...31cc",
    item: "Domain Name Sale",
    amountEth: "1.20 ETH",
    amountUsd: "$2,510.00",
    status: "Disputed",
    hash: "0x332...11ac",
    avatarGradient: "from-red-500 to-red-200",
  },
];

function statusPill(status: OrderStatus) {
  switch (status) {
    case "Escrowed":
      return "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400";
    case "Released":
      return "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400";
    case "Delivered":
      return "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400";
    case "Disputed":
      return "bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400";
  }
}

export default function SellerDashboard() {
  const navigate = useNavigate();

  function onNewPaymentLink() {
    alert("New Payment Link (demo)");
  }

  function onViewOrder() {
    // you can wire to /seller/orders/:orderId later
    navigate("/seller/orders/SP-82931");
  }

  function onMarkDelivered() {
    alert("Marked delivered (demo) — buyer will confirm with OTP.");
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white transition-colors duration-200 min-h-screen">
      <div className="flex min-h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-[#dbe0e6] dark:border-[#2d3a4b] bg-white dark:bg-[#16222e] flex flex-col justify-between p-4">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 px-2">
              <div className="size-10 rounded-lg bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined">shield_person</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[#111418] dark:text-white text-base font-bold leading-tight">
                  SafePay
                </h1>
                <p className="text-[#617589] dark:text-[#94a3b8] text-xs font-medium">Seller Portal</p>
              </div>
            </div>

            <nav className="flex flex-col gap-1">
              <Link
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white font-medium"
                to="/seller/dashboard"
              >
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-sm">Dashboard</span>
              </Link>

              <Link
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] dark:text-[#94a3b8] hover:bg-background-light dark:hover:bg-[#1e2d3d] transition-colors"
                to="/seller/orders/SP-82931"
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                <span className="text-sm font-medium">My Orders</span>
              </Link>

              <button
                type="button"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] dark:text-[#94a3b8] hover:bg-background-light dark:hover:bg-[#1e2d3d] transition-colors"
                onClick={() => alert("Wallet page later")}
              >
                <span className="material-symbols-outlined">account_balance_wallet</span>
                <span className="text-sm font-medium">Wallet</span>
              </button>

              <button
                type="button"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] dark:text-[#94a3b8] hover:bg-background-light dark:hover:bg-[#1e2d3d] transition-colors"
                onClick={() => alert("Disputes page later")}
              >
                <span className="material-symbols-outlined">gavel</span>
                <span className="text-sm font-medium">Disputes</span>
              </button>

              <button
                type="button"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#617589] dark:text-[#94a3b8] hover:bg-background-light dark:hover:bg-[#1e2d3d] transition-colors"
                onClick={() => alert("Settings page later")}
              >
                <span className="material-symbols-outlined">settings</span>
                <span className="text-sm font-medium">Settings</span>
              </button>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={onNewPaymentLink}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">add_link</span>
              New Payment Link
            </button>

            <div className="flex items-center gap-3 p-2 border-t border-[#dbe0e6] dark:border-[#2d3a4b] pt-4">
              <div
                className="size-9 rounded-full bg-cover bg-center border border-gray-200"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbMkZ5R1JNU8bc0UgssKCRfCdAeq0p3ClMQ9BrXbRtwMMPp-Wi3_0cKIiEYoxC3BQUDoQTO_EIvVM8AECqb7AIld0zSNAcnFmdslpATVFlbKJ88xh-HZX8Q_WZPP5VUydVGeUGYY2GQBXTUaMvd7ZZW4sA1TGHnyUMZmGhXjzxehrJUpvecFVw8idbK-btPjjtE6gpfCSnbIO7rrhIynof18ZaKUJ4MoYqfXuALbB1WCjPBukKt1QtOO6r-Ncp6819djszsYC5NXrB")',
                }}
                role="img"
                aria-label="Seller avatar"
              />
              <div className="flex flex-col min-w-0">
                <p className="text-sm font-bold truncate">Alex Rivard</p>
                <p className="text-[10px] text-[#617589] uppercase tracking-wider">Pro Seller</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto">
          {/* Header */}
          <header className="h-16 border-b border-[#dbe0e6] dark:border-[#2d3a4b] bg-white dark:bg-[#16222e] flex items-center justify-between px-8 shrink-0">
            <div className="flex items-center gap-6">
              <h2 className="text-lg font-bold">Overview</h2>

              <div className="relative w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#617589] text-xl">
                  search
                </span>
                <input
                  className="w-full bg-background-light dark:bg-[#1e2d3d] border-none rounded-lg pl-10 pr-4 py-1.5 text-sm focus:ring-1 focus:ring-primary transition-all outline-none"
                  placeholder="Search orders..."
                  type="text"
                  onChange={() => {}}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="size-9 rounded-lg bg-background-light dark:bg-[#1e2d3d] flex items-center justify-center text-[#617589] dark:text-[#94a3b8] relative"
                onClick={() => alert("Notifications (demo)")}
              >
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#16222e]"></span>
              </button>

              <button
                type="button"
                className="size-9 rounded-lg bg-background-light dark:bg-[#1e2d3d] flex items-center justify-center text-[#617589] dark:text-[#94a3b8]"
                onClick={() => alert("Chat (demo)")}
              >
                <span className="material-symbols-outlined">chat_bubble</span>
              </button>

              <div className="h-8 w-px bg-[#dbe0e6] dark:bg-[#2d3a4b] mx-2"></div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-emerald-500 flex items-center gap-1 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded">
                  <span className="size-1.5 bg-emerald-500 rounded-full"></span>
                  Network: Mainnet
                </span>
              </div>
            </div>
          </header>

          {/* Content Area */}
          <div className="p-8 flex flex-col gap-8">
            {/* Summary */}
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-black tracking-tight">Seller Dashboard</h1>
              <p className="text-[#617589] dark:text-[#94a3b8]">
                Real-time tracking for your blockchain escrow transactions.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[#16222e] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <span className="material-symbols-outlined">pending_actions</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded">
                    +12% vs last week
                  </span>
                </div>
                <p className="text-[#617589] dark:text-[#94a3b8] text-sm font-medium">New Orders</p>
                <p className="text-2xl font-bold mt-1">24</p>
              </div>

              <div className="bg-white dark:bg-[#16222e] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg">
                    <span className="material-symbols-outlined">account_balance</span>
                  </div>
                  <span className="text-xs font-bold text-[#617589] bg-background-light dark:bg-[#1e2d3d] px-2 py-1 rounded">
                    Locked Funds
                  </span>
                </div>
                <p className="text-[#617589] dark:text-[#94a3b8] text-sm font-medium">Paid (Escrow)</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <p className="text-2xl font-bold">12.85 ETH</p>
                  <p className="text-sm text-[#617589] font-medium">≈ $28,450.21</p>
                </div>
              </div>

              <div className="bg-white dark:bg-[#16222e] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded">
                    +18% growth
                  </span>
                </div>
                <p className="text-[#617589] dark:text-[#94a3b8] text-sm font-medium">Released Payments</p>
                <p className="text-2xl font-bold mt-1">$142,800.00</p>
              </div>
            </div>

            {/* Recent Orders Table */}
            <div className="bg-white dark:bg-[#16222e] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] overflow-hidden shadow-sm">
              <div className="p-6 border-b border-[#dbe0e6] dark:border-[#2d3a4b] flex items-center justify-between">
                <h3 className="font-bold text-lg">Recent Orders</h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="px-3 py-1.5 text-xs font-bold border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg hover:bg-background-light dark:hover:bg-[#1e2d3d]"
                    onClick={() => alert("Filter (demo)")}
                  >
                    Filter
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1.5 text-xs font-bold border border-[#dbe0e6] dark:border-[#2d3a4b] rounded-lg hover:bg-background-light dark:hover:bg-[#1e2d3d]"
                    onClick={() => alert("Export CSV (demo)")}
                  >
                    Export CSV
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-background-light/50 dark:bg-[#1e2d3d]/50 text-[#617589] dark:text-[#94a3b8] text-xs font-bold uppercase tracking-wider">
                      <th className="px-6 py-4">Buyer Address</th>
                      <th className="px-6 py-4">Item / Service</th>
                      <th className="px-6 py-4">Amount</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Escrow Hash</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#dbe0e6] dark:divide-[#2d3a4b] text-sm">
                    {demoOrders.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-background-light/30 dark:hover:bg-[#1e2d3d]/30 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className={`size-6 rounded-full bg-gradient-to-tr ${row.avatarGradient}`} />
                            <span className="font-mono text-xs">{row.buyer}</span>
                          </div>
                        </td>

                        <td className="px-6 py-4 font-medium">{row.item}</td>

                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-bold">{row.amountEth}</span>
                            <span className="text-[10px] text-[#617589]">{row.amountUsd}</span>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${statusPill(
                              row.status
                            )}`}
                          >
                            <span className="size-1.5 rounded-full bg-current opacity-70"></span>
                            {row.status}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <span className="text-xs text-[#617589] font-mono">{row.hash}</span>
                        </td>

                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              type="button"
                              className={`font-bold text-xs ${
                                row.status === "Disputed" ? "text-red-500 hover:underline" : "text-primary hover:underline"
                              }`}
                              onClick={onViewOrder}
                            >
                              {row.status === "Disputed" ? "Join Chat" : "View Order"}
                            </button>

                            {row.status === "Escrowed" ? (
                              <button
                                type="button"
                                className="bg-primary text-white px-3 py-1 rounded-lg text-xs font-bold"
                                onClick={onMarkDelivered}
                              >
                                Mark Delivered
                              </button>
                            ) : row.status === "Released" ? (
                              <button
                                type="button"
                                className="bg-[#f0f2f4] dark:bg-[#1e2d3d] text-[#111418] dark:text-white px-3 py-1 rounded-lg text-xs font-bold cursor-not-allowed opacity-60"
                                disabled
                              >
                                Delivered
                              </button>
                            ) : row.status === "Delivered" ? (
                              <button
                                type="button"
                                className="bg-primary text-white px-3 py-1 rounded-lg text-xs font-bold"
                                onClick={() => alert("Reminder sent (demo)")}
                              >
                                Remind Buyer
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs font-bold"
                                onClick={() => alert("Resolution Center (demo)")}
                              >
                                Resolution Center
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 border-t border-[#dbe0e6] dark:border-[#2d3a4b] bg-background-light/20 dark:bg-[#1e2d3d]/20 flex items-center justify-between">
                <p className="text-xs text-[#617589] dark:text-[#94a3b8]">Showing 4 of 24 active orders</p>
                <div className="flex gap-1">
                  <button
                    type="button"
                    className="size-8 flex items-center justify-center rounded border border-[#dbe0e6] dark:border-[#2d3a4b] hover:bg-white dark:hover:bg-[#16222e]"
                    onClick={() => alert("Prev page (demo)")}
                  >
                    <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                  </button>
                  <button type="button" className="size-8 flex items-center justify-center rounded border border-primary bg-primary text-white text-xs font-bold">
                    1
                  </button>
                  <button
                    type="button"
                    className="size-8 flex items-center justify-center rounded border border-[#dbe0e6] dark:border-[#2d3a4b] text-xs font-bold hover:bg-white dark:hover:bg-[#16222e]"
                    onClick={() => alert("Page 2 (demo)")}
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="size-8 flex items-center justify-center rounded border border-[#dbe0e6] dark:border-[#2d3a4b] text-xs font-bold hover:bg-white dark:hover:bg-[#16222e]"
                    onClick={() => alert("Page 3 (demo)")}
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="size-8 flex items-center justify-center rounded border border-[#dbe0e6] dark:border-[#2d3a4b] hover:bg-white dark:hover:bg-[#16222e]"
                    onClick={() => alert("Next page (demo)")}
                  >
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Stats Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
              <div className="bg-white dark:bg-[#16222e] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b]">
                <h3 className="font-bold mb-4">Payout Schedule</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background-light dark:bg-[#1e2d3d]">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">schedule</span>
                      <div>
                        <p className="text-sm font-bold">Next Automatic Release</p>
                        <p className="text-[10px] text-[#617589]">Project: UI Design Kit</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold">In 4h 12m</p>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-background-light dark:bg-[#1e2d3d]">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary">event_available</span>
                      <div>
                        <p className="text-sm font-bold">Batch Disbursement</p>
                        <p className="text-[10px] text-[#617589]">All cleared funds to wallet</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold">Monday, 09:00 AM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-[#16222e] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b]">
                <h3 className="font-bold mb-4">Security Overview</h3>

                <div className="flex gap-4 items-center">
                  <div className="relative size-16">
                    <svg className="size-full" viewBox="0 0 36 36">
                      <circle className="stroke-gray-200 dark:stroke-gray-700" cx="18" cy="18" r="16" fill="none" strokeWidth="3"></circle>
                      <circle className="stroke-primary" cx="18" cy="18" r="16" fill="none" strokeDasharray="85, 100" strokeLinecap="round" strokeWidth="3"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold">85%</div>
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-bold">Wallet Security: Strong</p>
                    <p className="text-xs text-[#617589] dark:text-[#94a3b8] mt-1">
                      Multi-sig is active. 2 of 3 confirmations required for manual withdrawals.
                    </p>
                  </div>

                  <button type="button" className="text-xs font-bold text-primary hover:underline" onClick={() => alert("Manage (demo)")}>
                    Manage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
