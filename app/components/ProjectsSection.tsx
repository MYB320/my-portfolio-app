import { Link, useLoaderData } from "react-router";
import { Button } from "./ui/button";
import { ArrowRightFromLineIcon } from "lucide-react";
import { ProjectCard } from "./projectCard";

import type { Project } from "~/db/schema";

export function ProjectsSection() {
  const { projects } = useLoaderData<{ projects: Project[] }>();

  return (
    <div className="bg-muted">
      <section
        id="projects"
        className="mx-auto container py-16 md:py-22 lg:py-32 px-4 md:px-6 lg:px-8 max-w-7xl"
      >
        <div className="flex justify-between items-center pb-8">
          <h2 className="text-2xl text-accent-foreground font-bold tracking-tight">
            Projects
          </h2>
          <Button variant="ghost" size="lg" asChild>
            <Link to="/projects">
              <ArrowRightFromLineIcon /> View All
            </Link>
          </Button>
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
      <div className="relative bottom-0 left-0 right-0 h-16 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
