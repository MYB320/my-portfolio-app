import { neon } from "@netlify/neon";

const connectionString =
  process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Missing NETLIFY_DATABASE_URL / DATABASE_URL environment variable.");
}

const sql = neon(connectionString);

async function runMigration() {
  console.log("🚀 Starting database schema migration...");

  // 1. Projects table alterations
  console.log("Updating 'projects' table columns...");
  await sql`
    CREATE TABLE IF NOT EXISTS "projects" (
      "id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      "title" varchar(255) NOT NULL,
      "slug" varchar(255) NOT NULL UNIQUE,
      "description" text NOT NULL,
      "image" varchar(500),
      "link" varchar(500),
      "github" varchar(500),
      "full_description" text,
      "created_at" timestamp DEFAULT now()
    );
  `;

  await sql`ALTER TABLE "projects" ADD COLUMN IF NOT EXISTS "slug" varchar(255);`;
  await sql`ALTER TABLE "projects" ADD COLUMN IF NOT EXISTS "image" varchar(500);`;
  await sql`ALTER TABLE "projects" ADD COLUMN IF NOT EXISTS "link" varchar(500);`;
  await sql`ALTER TABLE "projects" ADD COLUMN IF NOT EXISTS "github" varchar(500);`;
  await sql`ALTER TABLE "projects" ADD COLUMN IF NOT EXISTS "full_description" text;`;
  await sql`ALTER TABLE "projects" ADD COLUMN IF NOT EXISTS "created_at" timestamp DEFAULT now();`;

  // Drop NOT NULL constraints on legacy columns if they exist
  await sql`ALTER TABLE "projects" ALTER COLUMN "content" DROP NOT NULL;`.catch(() => {});
  await sql`ALTER TABLE "projects" ALTER COLUMN "tech" DROP NOT NULL;`.catch(() => {});
  await sql`ALTER TABLE "projects" ALTER COLUMN "repoUrl" DROP NOT NULL;`.catch(() => {});
  await sql`ALTER TABLE "projects" ALTER COLUMN "demoUrl" DROP NOT NULL;`.catch(() => {});
  await sql`ALTER TABLE "projects" ALTER COLUMN "thumbnailUrl" DROP NOT NULL;`.catch(() => {});
  await sql`ALTER TABLE "projects" ALTER COLUMN "imagesUrl" DROP NOT NULL;`.catch(() => {});

  // 2. Features table
  console.log("Creating 'features' table...");
  await sql`
    CREATE TABLE IF NOT EXISTS "features" (
      "id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      "project_id" integer NOT NULL REFERENCES "projects"("id") ON DELETE CASCADE,
      "title" varchar(255) NOT NULL,
      "description" text NOT NULL
    );
  `;

  // 3. Tech Stack table
  console.log("Creating 'tech_stack' table...");
  await sql`
    CREATE TABLE IF NOT EXISTS "tech_stack" (
      "id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      "project_id" integer NOT NULL REFERENCES "projects"("id") ON DELETE CASCADE,
      "name" varchar(100) NOT NULL,
      "description" text
    );
  `;

  // 4. Challenges table
  console.log("Creating 'challenges' table...");
  await sql`
    CREATE TABLE IF NOT EXISTS "challenges" (
      "id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      "project_id" integer NOT NULL REFERENCES "projects"("id") ON DELETE CASCADE,
      "text" text NOT NULL
    );
  `;

  // 5. Outcomes table
  console.log("Creating 'outcomes' table...");
  await sql`
    CREATE TABLE IF NOT EXISTS "outcomes" (
      "id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      "project_id" integer NOT NULL REFERENCES "projects"("id") ON DELETE CASCADE,
      "text" text NOT NULL
    );
  `;

  // 6. Contacts table
  console.log("Verifying 'contacts' table...");
  await sql`
    CREATE TABLE IF NOT EXISTS "contacts" (
      "id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      "name" varchar(255) NOT NULL,
      "email" varchar(255) NOT NULL,
      "subject" varchar(500) NOT NULL,
      "message" text NOT NULL,
      "created_at" timestamp DEFAULT now() NOT NULL,
      "is_read" boolean DEFAULT false NOT NULL
    );
  `;

  console.log("✅ All tables and columns migrated successfully!");
}

runMigration()
  .then(() => {
    console.log("✨ Migration process completed.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Migration failed:", err);
    process.exit(1);
  });
