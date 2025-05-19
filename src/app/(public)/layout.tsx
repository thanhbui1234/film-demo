"use client";

import Header from "@/app/components/Layouts/Header";
import Footer from "../components/Layouts/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d]">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
