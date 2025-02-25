export default function Tickets() {
  const tickets = [
    { id: "001", title: "Login Issue", status: "Open", priority: "High", category: "USER_ACCESS", department: "IT_SUPPORT", created: "2025-02-15" },
    {
      id: "002",
      title: "Payment Failure",
      status: "In Progress",
      priority: "Medium",
      category: "BILLING",
      department: "FINANCE_TICKET",
      created: "2025-02-14",
    },
    {
      id: "003",
      title: "Bug in Dashboard",
      status: "Resolved",
      priority: "Low",
      category: "BUG_REPORT",
      department: "DEVOPS_SUPPORT",
      created: "2025-02-13",
    },
    {
      id: "004",
      title: "Request for Feature",
      status: "Pending",
      priority: "Medium",
      category: "FEATURE_REQUEST",
      department: "ADMIN_HELPDESK",
      created: "2025-02-12",
    },
  ];

  const statusColors: Record<string, string> = {
    Open: "text-red-600",
    "In Progress": "text-yellow-600",
    Resolved: "text-green-600",
    Pending: "text-blue-600",
  };

  const priorityColors: Record<string, string> = {
    Low: "bg-green-200 text-green-700",
    Medium: "bg-yellow-200 text-yellow-700",
    High: "bg-red-200 text-red-700",
    Critical: "bg-purple-200 text-purple-700",
    Blocker: "bg-gray-200 text-gray-700",
  };

  const categoryColors: Record<string, string> = {
    USER_ACCESS: "text-blue-500",
    BILLING: "text-orange-500",
    BUG_REPORT: "text-red-500",
    FEATURE_REQUEST: "text-green-500",
    SYSTEM_ISSUE: "text-gray-500",
  };

  const departmentColors: Record<string, string> = {
    IT_SUPPORT: "text-purple-500",
    FINANCE_TICKET: "text-yellow-500",
    DEVOPS_SUPPORT: "text-indigo-500",
    ADMIN_HELPDESK: "text-teal-500",
    CUSTOMER_SUPPORT: "text-pink-500",
  };

  return (
    <div className="p-6 mx-3 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-primary mb-4">Ticket List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-primary">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Priority</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Department</th>
              <th className="p-3 border">Created</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="text-center border text-primary">
                <td className="p-3 border">{ticket.id}</td>
                <td className="p-3 border">{ticket.title}</td>
                <td className={`p-3 border ${statusColors[ticket.status] || "text-gray-600"}`}>{ticket.status}</td>
                <td className={`p-3 border rounded px-2 py-1 ${priorityColors[ticket.priority] || "bg-gray-200 text-gray-700"}`}>
                  {ticket.priority}
                </td>
                <td className={`p-3 border ${categoryColors[ticket.category] || "text-gray-600"}`}>{ticket.category}</td>
                <td className={`p-3 border ${departmentColors[ticket.department] || "text-gray-600"}`}>{ticket.department}</td>
                <td className="p-3 border">{ticket.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
