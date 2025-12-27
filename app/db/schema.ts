import {
  pgTable,
  text,
  varchar,
  timestamp,
  integer,
  serial,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Projects table
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  image: varchar("image", { length: 500 }),
  link: varchar("link", { length: 500 }),
  github: varchar("github", { length: 500 }),
  fullDescription: text("full_description"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Features table
export const features = pgTable("features", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
});

// Tech Stack table
export const techStack = pgTable("tech_stack", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description"),
});

// Challenges table
export const challenges = pgTable("challenges", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
  text: text("text").notNull(),
});

// Outcomes table
export const outcomes = pgTable("outcomes", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id")
    .notNull()
    .references(() => projects.id, { onDelete: "cascade" }),
  text: text("text").notNull(),
});

// Relations
export const projectsRelations = relations(projects, ({ many }) => ({
  features: many(features),
  techStack: many(techStack),
  challenges: many(challenges),
  outcomes: many(outcomes),
}));

export const featuresRelations = relations(features, ({ one }) => ({
  project: one(projects, {
    fields: [features.projectId],
    references: [projects.id],
  }),
}));

export const techStackRelations = relations(techStack, ({ one }) => ({
  project: one(projects, {
    fields: [techStack.projectId],
    references: [projects.id],
  }),
}));

export const challengesRelations = relations(challenges, ({ one }) => ({
  project: one(projects, {
    fields: [challenges.projectId],
    references: [projects.id],
  }),
}));

export const outcomesRelations = relations(outcomes, ({ one }) => ({
  project: one(projects, {
    fields: [outcomes.projectId],
    references: [projects.id],
  }),
}));

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
