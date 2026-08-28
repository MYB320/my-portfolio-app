export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectTechStack {
  name: string;
  description?: string | null;
}

export interface ProjectChallenge {
  text: string;
}

export interface ProjectOutcome {
  text: string;
}

export interface ProjectItem {
  id?: number;
  title: string;
  slug: string;
  description: string;
  image?: string | null;
  images?: string[];
  link?: string | null;
  github?: string | null;
  fullDescription?: string | null;
  technologies: string[];
  features: ProjectFeature[];
  techStack: ProjectTechStack[];
  challenges: ProjectChallenge[];
  outcomes: ProjectOutcome[];
}

export const docifyProject: ProjectItem = {
  title: "Docify",
  slug: "docify",
  description:
    "The modern, AI-powered collaborative document editor and knowledge workspace.",
  image: "/projects/docify/docify1.png",
  images: [
    "/projects/docify/docify1.png",
    "/projects/docify/docify2.png",
    "/projects/docify/docify3.png",
  ],
  link: "https://docify-sand.vercel.app",
  github: "https://github.com/MYB320/Docify",
  fullDescription:
    "Docify is an intelligent, high-performance web-based document editing platform designed for speed, clarity, and collaboration. Built on modern web technologies including Next.js 15 App Router, TipTap, Google Gemini 2.5 Flash AI, and Better-Auth, Docify combines a distraction-free writing interface with power-tools for teams and solo creators alike.",
  technologies: [
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS v4",
    "TipTap",
    "Google Gemini 2.5 Flash",
    "Better-Auth",
    "Neon PostgreSQL",
    "Drizzle ORM",
    "Radix UI",
  ],
  features: [
    {
      title: "Rich Text Editing Engine",
      description:
        "Fast, headless extensible TipTap editing engine with full typography support (H1-H3, lists, blockquotes, code snippets), interactive 3x3 tables, live word/character counters, reading time estimation, and debounced auto-saving with cloud sync indicators.",
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

export const defaultProjects: ProjectItem[] = [docifyProject];
