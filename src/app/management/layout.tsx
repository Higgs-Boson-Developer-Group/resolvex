import type { Metadata } from "next";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "ApplicantX - Management",
  description: "ApplicantX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div >
      <NavBar /> {/* Client-side component for navigation */}
      <main>{children}</main>
    </div>
  );
}
