import { db } from "./index";
import { projects, features, techStack, challenges, outcomes } from "./schema";

export const docifyProjectData = {
  project: {
    title: "Docify",
    slug: "docify",
    description:
      "The modern, AI-powered collaborative document editor and knowledge workspace.",
    image: "/projects/docify/docify1.png",
    link: "https://docify-sand.vercel.app",
    github: "https://github.com/MYB320/Docify",
    fullDescription:
      "Docify is an intelligent, high-performance web-based document editing platform designed for speed, clarity, and collaboration. Built on modern web technologies including Next.js 15 App Router, TipTap, Google Gemini 2.5 Flash AI, and Better-Auth, Docify combines a distraction-free writing interface with power-tools for teams and solo creators alike.",
  },
  features: [
    {
      title: "Rich Text Editing",
      description:
        "Fast, headless extensible TipTap editing engine with full typography support (H1-H3, lists, blockquotes, code snippets), interactive 3x3 tables, live word/character counters, estimated reading time, and debounced auto-saving with cloud sync indicators.",
    },
    {
      title: "Google Gemini 2.5 Flash AI Assistant",
      description:
        "Dedicated sidebar assistant for real-time text transformation (improve writing, fix grammar/spelling, summarize, expand/shorten, change tone across 5 styles, and translate into 8+ languages) with 1-click in-place insertion or replacement.",
    },
    {
      title: "Real-Time Collaboration & Permissions",
      description:
        "Granular access control allowing document owners to invite teammates by email as Editors (full edit & AI powers) or Viewers (read-only mode), with a dedicated 'Shared with Me' dashboard hub.",
    },
    {
      title: "Folders, Tags & Starred Documents",
      description:
        "Organize documents into custom color-coded folders, apply and filter by #tags, star high-priority drafts, and search instantly across titles, body content, tags, and folder names with flexible sorting.",
    },
    {
      title: "Multi-Format Document Export",
      description:
        "Download and export documents seamlessly into multiple formats: browser-native styled PDF, ATX-formatted Markdown (.md), standalone responsive HTML (.html), and clean Plain Text (.txt).",
    },
    {
      title: "Tiered Billing & Pricing System",
      description:
        "3-tier subscription model (Free, Plus, Pro) with monthly/annual billing discount calculation, simulated interactive checkout modal, usage meters, and billing history invoices.",
    },
  ],
  techStack: [
    {
      name: "Next.js 15",
      description: "React framework with App Router, Server Components, and Server Actions",
    },
    {
      name: "TypeScript",
      description: "Strict end-to-end type safety across client and server",
    },
    {
      name: "Tailwind CSS v4",
      description: "Modern utility-first CSS styling engine",
    },
    {
      name: "TipTap",
      description: "Headless extensible rich-text editor engine with custom extensions & tables",
    },
    {
      name: "Google Gemini 2.5 Flash",
      description: "Fast multi-modal AI generation and text processing via @google/genai",
    },
    {
      name: "Better-Auth",
      description: "Secure, comprehensive authentication and session management",
    },
    {
      name: "Neon PostgreSQL",
      description: "Serverless PostgreSQL cloud database",
    },
    {
      name: "Drizzle ORM",
      description: "Type-safe TypeScript ORM for schema definition and queries",
    },
    {
      name: "Radix UI & Shadcn UI",
      description: "Accessible, composable UI primitives and components",
    },
  ],
  challenges: [
    {
      text: "Synchronizing TipTap editor state smoothly with debounced cloud persistence and optimistic sync indicators without causing UI jank or input race conditions.",
    },
    {
      text: "Integrating Google Gemini 2.5 Flash API for low-latency text transformations and providing seamless 1-click in-place text replacement in the active document.",
    },
    {
      text: "Designing a robust role-based permission system (Viewer vs. Editor) with secure token management and real-time collaborator list updates.",
    },
  ],
  outcomes: [
    {
      text: "Engineered and deployed a production-ready, full-stack collaborative AI document workspace on Vercel and Neon PostgreSQL.",
    },
    {
      text: "Delivered a distraction-free writing experience combined with versatile multi-format document exporting (PDF, Markdown, HTML, TXT).",
    },
  ],
};

/**
 * Seed function to insert Docify into the database
 */
export async function seedDocify() {
  console.log("Seeding Docify project...");

  const [insertedProject] = await db
    .insert(projects)
    .values(docifyProjectData.project)
    .returning();

  const projectId = insertedProject.id;

  if (docifyProjectData.features.length > 0) {
    await db.insert(features).values(
      docifyProjectData.features.map((f) => ({
        ...f,
        projectId,
      }))
    );
  }

  if (docifyProjectData.techStack.length > 0) {
    await db.insert(techStack).values(
      docifyProjectData.techStack.map((t) => ({
        ...t,
        projectId,
      }))
    );
  }

  if (docifyProjectData.challenges.length > 0) {
    await db.insert(challenges).values(
      docifyProjectData.challenges.map((c) => ({
        ...c,
        projectId,
      }))
    );
  }

  if (docifyProjectData.outcomes.length > 0) {
    await db.insert(outcomes).values(
      docifyProjectData.outcomes.map((o) => ({
        ...o,
        projectId,
      }))
    );
  }

  console.log(`✅ Docify seeded successfully with ID: ${projectId}`);
  return insertedProject;
}

if (import.meta.main) {
  seedDocify()
    .then(() => {
      console.log("Seeding completed.");
      process.exit(0);
    })
    .catch((err) => {
      console.error("❌ Seeding failed:", err);
      process.exit(1);
    });
}
