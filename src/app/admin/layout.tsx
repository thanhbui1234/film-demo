"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/admin" },
  { name: "Movies", href: "/admin/movies" },
  { name: "Users", href: "/admin/users" },
  { name: "Settings", href: "/admin/settings" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-4 bg-gray-900">
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          </div>
          <nav className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t">
            <button
              onClick={() => {
                // Add your logout logic here
                document.cookie =
                  "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                window.location.href = "/login";
              }}
              className="w-full px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <header className="bg-white shadow">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              {navigation.find((item) => item.href === pathname)?.name ||
                "Admin"}
            </h1>
          </div>
        </header>
        <main className="py-6">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
