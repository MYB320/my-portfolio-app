import { Link } from "react-router";
import type { Route } from "./+types/project";
import { db } from "~/db";
import { eq } from "drizzle-orm";
import { projects } from "~/db/schema";
import { defaultProjects, type ProjectItem } from "~/lib/projectsData";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  AlertCircle,
  Trophy,
} from "lucide-react";

export async function loader({ params }: Route.LoaderArgs) {
  const projectSlug = params.slug;

  try {
    const dbProject = await db.query.projects.findFirst({
      where: eq(projects.slug, projectSlug),
      with: {
        techStack: true,
        features: true,
        challenges: true,
        outcomes: true,
      },
    });

    if (dbProject) {
      const project: ProjectItem = {
        id: dbProject.id,
        title: dbProject.title,
        slug: dbProject.slug,
        description: dbProject.description,
        image: dbProject.image,
        link: dbProject.link,
        github: dbProject.github,
        fullDescription: dbProject.fullDescription,
        technologies: dbProject.techStack.map((t) => t.name),
        features: dbProject.features,
        techStack: dbProject.techStack,
        challenges: dbProject.challenges,
        outcomes: dbProject.outcomes,
      };
      return { project };
    }
  } catch (error) {
    console.warn("Could not fetch project from DB, searching fallback list:", error);
  }

  const fallback = defaultProjects.find((p) => p.slug === projectSlug);
  if (fallback) {
    return { project: fallback };
  }

  throw new Response("Project Not Found", { status: 404 });
}

export function meta({ data }: Route.MetaArgs) {
  const title = data?.project?.title
    ? `${data.project.title} - Mohamed Yasser Portfolio`
    : "Project Details - Mohamed Yasser Portfolio";
  const description =
    data?.project?.description || "Welcome to Mohamed Yasser Portfolio";

  return [
    { title },
    { name: "description", content: description },
  ];
}

export default function Project({ loaderData }: Route.ComponentProps) {
  const { project } = loaderData;

  return (
    <section className="mx-auto container py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 max-w-5xl">
      {/* Back Navigation */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="gap-2 -ml-2 text-muted-foreground hover:text-foreground">
          <Link to="/projects">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="space-y-4 pb-8 border-b border-border/40">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {project.title}
          </h1>

          <div className="flex items-center gap-3">
            {project.github && (
              <Button variant="outline" size="sm" asChild className="gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </Button>
            )}
            {project.link && (
              <Button size="sm" asChild className="gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies?.map((tech) => (
            <Badge key={tech} variant="secondary" className="px-3 py-1 text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Hero Image if available */}
      {project.image && (
        <div className="my-8 rounded-xl overflow-hidden border border-border/40 shadow-sm bg-muted aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Hide broken image placeholder
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      )}

      {/* Project Overview */}
      {project.fullDescription && (
        <div className="my-10 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" /> Overview
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            {project.fullDescription}
          </p>
        </div>
      )}

      {/* Key Features */}
      {project.features && project.features.length > 0 && (
        <div className="my-12 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" /> Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-border/50 bg-card hover:border-border transition-colors space-y-2"
              >
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <h3>{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="my-12 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Cpu className="w-5 h-5 text-primary" /> Architecture & Tech Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-border/40 bg-muted/40 space-y-1"
              >
                <div className="font-medium text-foreground">{tech.name}</div>
                {tech.description && (
                  <div className="text-xs text-muted-foreground">
                    {tech.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Challenges & Solutions */}
      {project.challenges && project.challenges.length > 0 && (
        <div className="my-12 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-500" /> Engineering Challenges
          </h2>
          <ul className="space-y-3">
            {project.challenges.map((challenge, idx) => (
              <li
                key={idx}
                className="p-4 rounded-xl border border-border/40 bg-card text-muted-foreground text-sm leading-relaxed flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                <span>{challenge.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Outcomes & Impact */}
      {project.outcomes && project.outcomes.length > 0 && (
        <div className="my-12 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" /> Outcomes & Takeaways
          </h2>
          <ul className="space-y-3">
            {project.outcomes.map((outcome, idx) => (
              <li
                key={idx}
                className="p-4 rounded-xl border border-border/40 bg-card text-muted-foreground text-sm leading-relaxed flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-yellow-500 shrink-0 mt-2" />
                <span>{outcome.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer Call to action */}
      <div className="mt-16 pt-8 border-t border-border/40 flex flex-wrap justify-between items-center gap-4">
        <Button variant="outline" asChild>
          <Link to="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" /> All Projects
          </Link>
        </Button>
        <div className="flex items-center gap-3">
          {project.github && (
            <Button variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" /> View on GitHub
              </a>
            </Button>
          )}
          {project.link && (
            <Button asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" /> Open Live Project
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
