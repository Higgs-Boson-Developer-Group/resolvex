"use client";
export default function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white shadow-lg rounded-lg p-4 text-center">
        <h2 className="text-primary text-xl font-bold">Total Tickets</h2>
        <p className="text-secondary text-3xl font-semibold">55</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4 text-center">
        <h2 className="text-primary text-xl font-bold">Open Tickets</h2>
        <p className="text-secondary text-3xl font-semibold">18</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4 text-center">
        <h2 className="text-primary text-xl font-bold">Resolved Tickets</h2>
        <p className="text-secondary text-3xl font-semibold">20</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-4 text-center">
        <h2 className="text-primary text-xl font-bold">Pending Tickets</h2>
        <p className="text-secondary text-3xl font-semibold">17</p>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-white p-6 rounded-lg shadow">
        <h2 className="text-primary text-xl font-bold mb-4">Ticket Overview</h2>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-primary text-lg font-semibold">New</p>
            <p className="text-secondary text-2xl font-bold">12</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-primary text-lg font-semibold">In Progress</p>
            <p className="text-secondary text-2xl font-bold">8</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-primary text-lg font-semibold">Resolved</p>
            <p className="text-secondary text-2xl font-bold">20</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-primary text-lg font-semibold">Closed</p>
            <p className="text-secondary text-2xl font-bold">15</p>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-end gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">All Tickets</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Open</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Resolved</button>
      </div>
    </div>
  );
}
