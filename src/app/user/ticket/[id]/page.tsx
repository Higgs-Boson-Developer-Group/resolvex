"use client";
export default async function Ticket({ params }: { params: { id?: string } }) {
  const { id } = await params;
  return <>Ticket {id}</>;
}
