import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Find user
    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!user || user.password !== password) {
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

// Helper function to create initial admin user
export async function createInitialAdmin() {
  const adminExists = await db.query.users.findFirst({
    where: eq(users.email, "admin@example.com"),
  });

  if (!adminExists) {
    await db.insert(users).values({
      id: uuidv4(),
      email: "admin@example.com",
      password: "admin123",
      role: "admin",
    });
  }
}
