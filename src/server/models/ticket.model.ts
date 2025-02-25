"use server";

import { Schema, model, models } from "mongoose";

const TicketSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    ticketStatus: {
      type: String,
      enum: ["NEW", "OPEN", "IN_PROGRESS", "PENDING", "ON_HOLD", "ESCALATED", "RESOLVED", "CLOSED", "REOPENED", "CANCELLED"],
      default: "NEW",
    },
    priorityLevel: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH", "CRITICAL", "BLOCKER"],
      default: "MEDIUM",
    },
    category: {
      type: String,
      enum: [
        "BUG_REPORT",
        "FEATURE_REQUEST",
        "SYSTEM_ISSUE",
        "USER_ACCESS",
        "BILLING",
        "HARDWARE_FAILURE",
        "SOFTWARE_ERROR",
        "CONFIGURATION_REQUEST",
        "INQUIRY",
        "FEEDBACK",
      ],
      required: true,
    },
    department: {
      type: String,
      enum: [
        "IT_SUPPORT",
        "HR_REQUEST",
        "FINANCE_TICKET",
        "LEGAL_CONCERN",
        "CUSTOMER_SUPPORT",
        "NETWORK_ISSUE",
        "SECURITY_ALERT",
        "PROCUREMENT",
        "DEVOPS_SUPPORT",
        "ADMIN_HELPDESK",
      ],
      required: true,
    },
    pictures: {
      type: [String], // Array of image URLs
      default: [],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps automatically
  }
);

const Ticket = models.Ticket || model("Ticket", TicketSchema);
export { Ticket };
