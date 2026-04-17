import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/drizzle/db";
import { account, session, user, verification } from "@/drizzle/schemas";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: {
			account,
			session,
			user,
			verification,
		},
	}),
	emailAndPassword: {
		enabled: true,
	},
	secret: process.env.BETTER_AUTH_SECRET,
	baseURL: process.env.EXPRESS_URL ?? "http://localhost:4000",
	trustedOrigins: [process.env.NEXTJS_URL ?? "http://localhost:3000"],
	advanced: {
		crossSubDomainCookies: {
			enabled: true,
			domain: "localhost",
		},
	},
});
