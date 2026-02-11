import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

type DisputeStatus = "Open" | "Resolved";

type Dispute = {
  date: string;
  orderId: string;
  reason: string;
  status: DisputeStatus;
  actionLabel: string;
};

const initialDisputes: Dispute[] = [
  {
    date: "Oct 24, 2023",
    orderId: "#SP-99201",
    reason: "Not as described",
    status: "Open",
    actionLabel: "View Details",
  },
  {
    date: "Oct 20, 2023",
    orderId: "#SP-98115",
    reason: "Item not delivered",
    status: "Resolved",
    actionLabel: "View Result",
  },
  {
    date: "Oct 15, 2023",
    orderId: "#SP-98002",
    reason: "Damaged on arrival",
    status: "Resolved",
    actionLabel: "View Result",
  },
  {
    date: "Oct 08, 2023",
    orderId: "#SP-97554",
    reason: "Shipping fraud",
    status: "Resolved",
    actionLabel: "View Result",
  },
];

function statusBadge(status: DisputeStatus) {
  if (status === "Open") {
    return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
  }
  return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
}

function statusDot(status: DisputeStatus) {
  return status === "Open" ? "bg-yellow-400" : "bg-green-400";
}

export default function BuyerDisputes() {
  const [search, setSearch] = useState("");
  const [orderId, setOrderId] = useState("");
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");

  const disputes = useMemo(() => {
    if (!search.trim()) return initialDisputes;
    const q = search.toLowerCase();
    return initialDisputes.filter(
      (d) =>
        d.orderId.toLowerCase().includes(q) ||
        d.reason.toLowerCase().includes(q) ||
        d.status.toLowerCase().includes(q)
    );
  }, [search]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo only
    alert(
      `Dispute submitted (demo)\nOrder: ${orderId || "-"}\nReason: ${
        reason || "-"
      }\nDescription: ${description || "-"}`
    );
    setOrderId("");
    setReason("");
    setDescription("");
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white min-h-screen">
      <div className="flex flex-col min-h-screen">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#2d3748] bg-white dark:bg-[#1a2634] px-10 py-3 sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-primary">
              <div className="size-8">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_6_330)">
                    <path
                      clipRule="evenodd"
                      d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_330">
                      <rect fill="white" height="48" width="48" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <Link to="/buyer/dashboard" className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                SafePay Escrow
              </Link>
            </div>

            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
                <div className="text-[#617589] flex border-none bg-background-light dark:bg-[#2d3748] items-center justify-center pl-4">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input
                  className="flex w-full min-w-0 flex-1 border-none bg-background-light dark:bg-[#2d3748] focus:ring-0 h-full placeholder:text-[#617589] px-4 text-base font-normal leading-normal dark:text-white outline-none"
                  placeholder="Search orders..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </label>
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

              <Link className="text-primary text-sm font-bold leading-normal" to="/buyer/disputes">
                Disputes
              </Link>

              <Link
                className="text-[#111418] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors"
                to="/payments/SP-99201"
              >
                Wallet
              </Link>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="flex items-center justify-center rounded-lg h-10 w-10 bg-background-light dark:bg-[#2d3748] text-[#111418] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={() => alert("Notifications (demo)")}
              >
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center rounded-lg h-10 w-10 bg-background-light dark:bg-[#2d3748] text-[#111418] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={() => alert("Profile (demo)")}
              >
                <span className="material-symbols-outlined">account_circle</span>
              </button>
            </div>

            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDC3k4GFx9-3ZL-gPIhJAi33El3QPTTXLim7lg_EFbqH4FlA0FoxXIAcq1saV1KUkbAvEMNcmXEBxTkaj0F8JCwznS7ayO7Dr0RL1wUfgPb4_cLGn36DsOt36sMe4Pgw0oPvVjHfx9CO5uTAm7jGrOrU_TcrtJJagW7sLS2oqnnbXXLIVvLpWscLi0rO88FyPPOtDG13FuVvsPjqSB6IXGo4q-2OxQ9AS_Owz11tkXcY_OjdISwFVJq8AEbfJV1MwL8Scr0-B5XoZ5c")',
              }}
              aria-label="User avatar"
              role="img"
            />
          </div>
        </header>

        <main className="flex-1 flex flex-col max-w-[1200px] mx-auto w-full px-6 py-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-6">
            <Link className="text-[#617589] text-sm hover:text-primary" to="/buyer/dashboard">
              Dashboard
            </Link>
            <span className="text-[#617589] text-sm">/</span>
            <span className="text-primary text-sm font-semibold">Disputes</span>
          </div>

          {/* Header Section */}
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Buyer Disputes
            </h1>
            <p className="text-[#617589] text-lg font-normal">
              Manage and submit dispute requests for your escrow transactions securely on-chain.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Submit Dispute Form */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-[#1a2634] p-6 rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm">
                <h2 className="text-[#111418] dark:text-white text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">gavel</span>
                  Submit New Dispute
                </h2>

                <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#111418] dark:text-gray-300">
                      Order ID
                    </label>
                    <input
                      className="rounded-lg border border-[#e5e7eb] dark:border-[#2d3748] dark:bg-[#101922] focus:border-primary focus:ring-primary w-full px-4 py-2.5 outline-none"
                      placeholder="#SP-99210"
                      type="text"
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#111418] dark:text-gray-300">
                      Dispute Reason
                    </label>
                    <select
                      className="rounded-lg border border-[#e5e7eb] dark:border-[#2d3748] dark:bg-[#101922] focus:border-primary focus:ring-primary w-full px-4 py-2.5 outline-none"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    >
                      <option value="">Select a reason</option>
                      <option value="Item not delivered">Item not delivered</option>
                      <option value="Not as described">Item not as described</option>
                      <option value="Damaged upon arrival">Damaged upon arrival</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#111418] dark:text-gray-300">
                      Description
                    </label>
                    <textarea
                      className="rounded-lg border border-[#e5e7eb] dark:border-[#2d3748] dark:bg-[#101922] focus:border-primary focus:ring-primary w-full px-4 py-2.5 outline-none"
                      placeholder="Describe the issue in detail..."
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <button
                    className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 mt-2 shadow-lg shadow-primary/20"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-sm">send</span>
                    File Dispute
                  </button>
                </form>
              </div>
            </div>

            {/* Disputes Table */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-[#1a2634] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm overflow-hidden">
                <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3748] flex justify-between items-center">
                  <h3 className="text-[#111418] dark:text-white text-xl font-bold">Existing Disputes</h3>
                  <button
                    type="button"
                    className="text-primary text-sm font-semibold hover:underline flex items-center gap-1"
                    onClick={() => alert("Filter (demo)")}
                  >
                    <span className="material-symbols-outlined text-sm">filter_list</span> Filter
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-background-light dark:bg-[#101922]">
                      <tr>
                        <th className="px-6 py-4 text-xs font-bold text-[#617589] uppercase tracking-wider">Date</th>
                        <th className="px-6 py-4 text-xs font-bold text-[#617589] uppercase tracking-wider">Order ID</th>
                        <th className="px-6 py-4 text-xs font-bold text-[#617589] uppercase tracking-wider">Reason</th>
                        <th className="px-6 py-4 text-xs font-bold text-[#617589] uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-xs font-bold text-[#617589] uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-[#e5e7eb] dark:divide-[#2d3748]">
                      {disputes.map((d) => (
                        <tr
                          key={d.orderId}
                          className="hover:bg-gray-50 dark:hover:bg-[#2d3748]/30 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm text-[#111418] dark:text-white">{d.date}</td>
                          <td className="px-6 py-4 text-sm font-mono text-primary">{d.orderId}</td>
                          <td className="px-6 py-4 text-sm text-[#111418] dark:text-white">{d.reason}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusBadge(
                                d.status
                              )}`}
                            >
                              <span className={`size-1.5 rounded-full mr-2 ${statusDot(d.status)}`} />
                              {d.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              type="button"
                              className="text-primary hover:text-blue-700 text-sm font-semibold"
                              onClick={() => alert(`${d.actionLabel}: ${d.orderId} (demo)`)}
                            >
                              {d.actionLabel}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="px-6 py-4 border-t border-[#e5e7eb] dark:border-[#2d3748] flex items-center justify-between">
                  <span className="text-sm text-[#617589]">Showing {disputes.length} of {initialDisputes.length} results</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="p-2 border border-[#e5e7eb] dark:border-[#2d3748] rounded hover:bg-gray-50 dark:hover:bg-[#2d3748] disabled:opacity-50"
                      disabled
                    >
                      <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 border border-[#e5e7eb] dark:border-[#2d3748] rounded hover:bg-gray-50 dark:hover:bg-[#2d3748]"
                      onClick={() => alert("Next page (demo)")}
                    >
                      <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-[#1a2634] border-t border-[#e5e7eb] dark:border-[#2d3748] py-8 mt-auto">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-bold text-[#111418] dark:text-white">SafePay</span>
              <span className="text-[#617589] text-sm">© 2023 Blockchain Escrow System</span>
            </div>

            <div className="flex gap-6">
              <a className="text-[#617589] hover:text-primary text-sm" href="#">
                Terms
              </a>
              <a className="text-[#617589] hover:text-primary text-sm" href="#">
                Privacy
              </a>
              <a className="text-[#617589] hover:text-primary text-sm" href="#">
                Documentation
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
