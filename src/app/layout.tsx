import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { serverStart } from "../server/config/config";
import "./globals.css";

//  Server startup configuration
serverStart();


export const metadata: Metadata = {
  title: "ResolveX",
  description: "ResolveX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-light">{children}</body>
    </html>
  );
}
