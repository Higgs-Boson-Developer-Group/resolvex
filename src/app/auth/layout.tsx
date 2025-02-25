import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ResolveX - Authentication",
  description: "ResolveX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
