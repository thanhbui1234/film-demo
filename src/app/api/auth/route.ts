import { NextResponse } from "next/server";

// Mock user database
const users = [
  {
    id: "1",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Find user
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create response with user data
    const response = NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    });

    // Set auth cookie in response
    response.cookies.set("auth-token", "dummy-token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  // Create response
  const response = NextResponse.json({ message: "Logged out successfully" });

  // Clear auth cookie
  response.cookies.delete("auth-token");

  return response;
}
