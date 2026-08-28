import { ProjectCard } from "~/components/projectCard";
import type { Route } from "./+types/projects";
import { db } from "~/db";
import { defaultProjects, type ProjectItem } from "~/lib/projectsData";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Myb Portfolio - Projects" },
    { name: "description", content: "Welcome Mohamed Yasser Portfolio" },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  try {
    const dbProjects = await db.query.projects.findMany({
      with: {
        techStack: true,
        features: true,
        challenges: true,
        outcomes: true,
      },
    });

    if (dbProjects && dbProjects.length > 0) {
      const formatted: ProjectItem[] = dbProjects.map((p) => {
        const fallback = defaultProjects.find((d) => d.slug === p.slug);
        return {
          id: p.id,
          title: p.title,
          slug: p.slug,
          description: p.description,
          image: p.image || fallback?.image || null,
          images: fallback?.images || (p.image ? [p.image] : []),
          link: p.link || fallback?.link || null,
          github: p.github || fallback?.github || null,
          fullDescription: p.fullDescription || fallback?.fullDescription || null,
          technologies:
            p.techStack.length > 0
              ? p.techStack.map((t) => t.name)
              : fallback?.technologies || [],
          features: p.features.length > 0 ? p.features : fallback?.features || [],
          techStack: p.techStack.length > 0 ? p.techStack : fallback?.techStack || [],
          challenges: p.challenges.length > 0 ? p.challenges : fallback?.challenges || [],
          outcomes: p.outcomes.length > 0 ? p.outcomes : fallback?.outcomes || [],
        };
      });
      return { projects: formatted };
    }
  } catch (error) {
    console.warn("Could not fetch projects from DB, using fallback projects:", error);
  }

  return {
    projects: defaultProjects,
  };
}

export default function Projects({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;

  return (
    <section className="mx-auto container py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 max-w-7xl">
      <div className="py-8 md:pb-12">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              tech={project.technologies}
              imageSrc={project.image}
              slug={project.slug}
            />
          ))
        ) : (
          <p className="col-span-3 text-center text-muted-foreground">
            No projects found.
          </p>
        )}
      </div>
    </section>
  );
}
