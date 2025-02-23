import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { redirect } from "react-router";
import { database } from "~/database/context";

const db = database();

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
  },
});

export const requiredAuth = async (request: Request) => {
  const session = await auth.api.getSession({ headers: request.headers });

  if (!session) {
    throw redirect("/login");
  }

  return session;
};
