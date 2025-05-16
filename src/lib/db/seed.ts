import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

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
