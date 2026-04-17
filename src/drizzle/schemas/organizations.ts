import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const organization = pgTable("organization", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	serverUrl: text("server_url").notNull(),
	dbUrl: text("db_url").notNull(),
	dbUsername: text("db_username").notNull(),
	dbPassword: text("db_password").notNull(),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
	deletedAt: timestamp("deleted_at"),
});
