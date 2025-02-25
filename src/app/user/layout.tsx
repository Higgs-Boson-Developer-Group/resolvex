import type { Metadata } from "next";
import NavBar from "./components/NavBar";
export const metadata: Metadata = {
  title: "ResolveX - User Portal",
  description: "ResolveX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar /> {/* Client-side component for navigation */}
      <main>{children}</main>
    </div>
  );
}
