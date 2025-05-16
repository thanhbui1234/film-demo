import { createInitialAdmin } from "@/lib/db/seed";

async function init() {
  try {
    await createInitialAdmin();
    console.log("Database initialized successfully!");
  } catch (error) {
    console.error("Error initializing database:", error);
    process.exit(1);
  }
}

init();
