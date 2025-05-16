import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const isLoginRoute = request.nextUrl.pathname === "/admin/login";
  const authToken = request.cookies.get("auth-token");

  // Nếu đang truy cập route admin và chưa đăng nhập
  if (isAdminRoute && !authToken && !isLoginRoute) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Nếu đã đăng nhập và cố truy cập trang login
  if (isLoginRoute && authToken) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*"],
};
