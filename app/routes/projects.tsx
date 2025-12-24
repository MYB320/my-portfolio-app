import { ProjectCard } from "~/components/projectCard";
import type { Route } from "./+types/projects";
import { db } from "~/db";
import { projects } from "~/db/schema";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Myb Portfolio - Projects" },
    { name: "description", content: "Welcome Mohamed Yasser Portfolio" },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const projectsPromise = await db.select().from(projects);

  return {
    projects: projectsPromise,
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
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tech={project.technologies}
              imageSrc={project.thumbnailUrl}
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
