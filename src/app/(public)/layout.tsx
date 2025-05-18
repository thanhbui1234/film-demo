"use client";

import { FloatingDock } from "../components/Layouts/FloatingDock";
import Footer from "../components/Layouts/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d]">
      {/* Header */}
      {/* <Header /> */}

      {/* Main content */}
      <main className="">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Floating Dock */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock
          desktopClassName="shadow-lg border border-white/10"
          mobileClassName="shadow-lg"
        />
      </div>
    </div>
  );
}
