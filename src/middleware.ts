import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const isLoginRoute = request.nextUrl.pathname === "/admin/login";
  const authToken = request.cookies.get("auth-token");

  // If accessing admin route without token
  if (isAdminRoute && !authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If accessing login page with token
  if (isLoginRoute && authToken) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*"],
};
