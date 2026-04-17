import { toNodeHandler } from "better-auth/node";
import express from "express";
import { auth } from "@/config/auth.config";
import { rateLimitConfig } from "@/config/rate-limit.config";

const app = express();

app.all("/api/auth/*", toNodeHandler(auth));

app.use(rateLimitConfig);

app.get("/", (_req, res) => {
	res.send("Hello, World");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
