import { Link } from "react-router-dom";

type OrderStatus = "Active" | "Paid" | "Completed" | "Disputed";

type Order = {
  id: string;
  seller: string;
  amount: string;
  status: OrderStatus;
  avatarClass: string; // just a colored block for now
};

const orders: Order[] = [
  { id: "#ORD-7721", seller: "CryptoVendor", amount: "0.5 ETH", status: "Active", avatarClass: "bg-slate-400" },
  { id: "#ORD-6610", seller: "BlockStore", amount: "1.2 ETH", status: "Paid", avatarClass: "bg-indigo-400" },
  { id: "#ORD-5509", seller: "ChainGoods", amount: "0.3 ETH", status: "Completed", avatarClass: "bg-emerald-400" },
  { id: "#ORD-4402", seller: "Web3Market", amount: "0.75 ETH", status: "Disputed", avatarClass: "bg-rose-400" },
];

function statusBadge(status: OrderStatus) {
  switch (status) {
    case "Active":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
    case "Paid":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
    case "Completed":
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300";
    case "Disputed":
      return "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300";
  }
}

export default function BuyerDashboard() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-y-auto">
          <div className="flex flex-col h-full p-4 gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3 px-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined">shield_locked</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-base font-bold leading-none">SafePay</h1>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Escrow System
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-1">
              <Link
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium"
                to="/buyer/dashboard"
              >
                <span className="material-symbols-outlined">dashboard</span>
                <span>Dashboard</span>
              </Link>

              <Link
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors"
                to="/orders/new"
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                <span>Orders</span>
              </Link>

              <Link
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors"
                to="/buyer/disputes"
              >
                <span className="material-symbols-outlined">gavel</span>
                <span>Disputes</span>
              </Link>

              <button
                type="button"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors text-left"
                onClick={() => alert("Profile page later")}
              >
                <span className="material-symbols-outlined">person</span>
                <span>Profile</span>
              </button>
            </nav>

            {/* User */}
            <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3 px-2">
                <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 bg-cover bg-center" />
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-semibold truncate">Alex Rivera</span>
                  <span className="text-xs text-slate-500 truncate">0x71C...49b2</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Buyer Dashboard
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Welcome back, manage your escrow orders here.
                </p>
              </div>

              <Link
                to="/orders/new"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-sm shadow-primary/20"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
                Create New Order
              </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Active Orders
                </p>
                <p className="text-3xl font-bold mt-2">12</p>
                <div className="mt-2 text-xs text-emerald-500 font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  +2 from last week
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Paid Amount
                </p>
                <p className="text-3xl font-bold mt-2">4.5 ETH</p>
                <div className="mt-2 text-xs text-slate-400 font-medium">
                  ≈ $10,450.20
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Completed
                </p>
                <p className="text-3xl font-bold mt-2">89</p>
                <div className="mt-2 text-xs text-slate-400 font-medium">
                  Lifetime success rate 98%
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Open Disputes
                </p>
                <p className="text-3xl font-bold mt-2 text-rose-500">2</p>
                <div className="mt-2 text-xs text-rose-400 font-medium">
                  Requires immediate action
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <h3 className="font-bold text-lg">Recent Orders</h3>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">search</span>
                  <input
                    className="bg-transparent border-none focus:ring-0 text-sm w-48 outline-none"
                    placeholder="Search orders..."
                    type="text"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase">
                    <tr>
                      <th className="px-6 py-4">Order ID</th>
                      <th className="px-6 py-4">Seller</th>
                      <th className="px-6 py-4">Amount</th>
                      <th className="px-6 py-4 text-center">Status</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {orders.map((o) => (
                      <tr
                        key={o.id}
                        className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-primary">
                          {o.id}
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                              <div className={`w-full h-full ${o.avatarClass}`} />
                            </div>
                            <span className="text-sm">{o.seller}</span>
                          </div>
                        </td>

                        <td className="px-6 py-4 text-sm font-medium">{o.amount}</td>

                        <td className="px-6 py-4 text-center">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusBadge(
                              o.status
                            )}`}
                          >
                            {o.status}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-right">
                          <Link
                            to={`/seller/orders/${encodeURIComponent(o.id.replace("#", ""))}`}
                            className="text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                          >
                            View Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Showing 4 of 12 orders
                </span>
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 text-sm font-medium bg-white dark:bg-slate-900 disabled:opacity-50"
                    disabled
                  >
                    Previous
                  </button>
                  <button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 text-sm font-medium bg-white dark:bg-slate-900">
                    Next
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
