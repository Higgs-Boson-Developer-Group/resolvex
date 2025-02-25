"use client";
import React, { useState } from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Define a type for calendar events
interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  description?: string;
}

export default function Tickets() {
  // State for the selected event, typed to handle null values
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const tickets = [
    { id: "001", title: "Login Issue", status: "Open", priority: "High", category: "USER_ACCESS", department: "IT_SUPPORT", created: "2025-02-15" },
    { id: "002", title: "Payment Failure", status: "In Progress", priority: "Medium", category: "BILLING", department: "FINANCE_TICKET", created: "2025-02-14" },
    { id: "003", title: "Bug in Dashboard", status: "Resolved", priority: "Low", category: "BUG_REPORT", department: "DEVOPS_SUPPORT", created: "2025-02-13" },
    { id: "004", title: "Request for Feature", status: "Pending", priority: "Medium", category: "FEATURE_REQUEST", department: "ADMIN_HELPDESK", created: "2025-02-12" },
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

  // Setup localizer for BigCalendar using Moment.js
  const localizer = momentLocalizer(moment);

  // Define calendar events with the CalendarEvent type
  const events: CalendarEvent[] = [
    {
      title: "Team Meeting",
      start: new Date(2025, 1, 15, 10, 0), // February 15, 2025, 10:00 AM
      end: new Date(2025, 1, 15, 11, 0),
      description: "Discuss project updates and next steps.",
    },
    {
      title: "Project Deadline",
      start: new Date(2025, 1, 20, 0, 0),
      end: new Date(2025, 1, 20, 23, 59),
      description: "Deadline for the Q1 project submission.",
    },
  ];

  // When an event is clicked, update the state with a CalendarEvent
  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
  };

  // Close the modal by resetting the state to null
  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="p-6 mx-3 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-primary mb-4">Tickets Dashboard</h2>
      <div className="grid grid-cols-1">
    
        {/* Ticket List Column (3/4 width) */}
        <div>
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
                    <td className={`p-3 border ${statusColors[ticket.status] || "text-gray-600"}`}>
                      {ticket.status}
                    </td>
                    <td className={`p-3 border rounded px-2 py-1 ${priorityColors[ticket.priority] || "bg-gray-200 text-gray-700"}`}>
                      {ticket.priority}
                    </td>
                    <td className={`p-3 border ${categoryColors[ticket.category] || "text-gray-600"}`}>
                      {ticket.category}
                    </td>
                    <td className={`p-3 border ${departmentColors[ticket.department] || "text-gray-600"}`}>
                      {ticket.department}
                    </td>
                    <td className="p-3 border">{ticket.created}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
            {/* Calendar Column (1/4 width) */}
            <div >
          <div className="border rounded-md shadow-lg">
            <BigCalendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              defaultView="month"
              style={{ height: 500 }}
              onSelectEvent={handleSelectEvent}
            />
          </div>
        </div>
      </div>

      {/* Modal for event details */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
          {/* Modal content */}
          <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-11/12 md:w-1/2">
            <h3 className="text-xl font-bold mb-4">{selectedEvent.title}</h3>
            <p className="mb-2">
              <strong>Start:</strong> {selectedEvent.start.toString()}
            </p>
            <p className="mb-2">
              <strong>End:</strong> {selectedEvent.end.toString()}
            </p>
            {selectedEvent.description && (
              <p className="mb-2">
                <strong>Description:</strong> {selectedEvent.description}
              </p>
            )}
            <button onClick={closeModal} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
