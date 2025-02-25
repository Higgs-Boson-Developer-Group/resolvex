"use client";

interface TicketProps {
  params: {
    id: string; // id is required, not optional
  };
}

export default function Ticket({ params: { id } }: TicketProps) {
  return <>Ticket {id}</>;
}
