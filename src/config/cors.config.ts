import type { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
	origin: process.env.CORS_ORIGIN || "*",
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
};
