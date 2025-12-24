import {
  integer,
  pgTable,
  varchar,
  text,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  technologies: varchar("tech").array().notNull(),
  repoUrl: varchar("repoUrl", { length: 255 }).notNull(),
  demoUrl: varchar("demoUrl", { length: 255 }).notNull(),
  thumbnailUrl: text("thumbnailUrl").notNull(),
  imagesUrl: text("imagesUrl").array().notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});

export const contacts = pgTable("contacts", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 500 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isRead: boolean("is_read").default(false).notNull(),
});

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;
