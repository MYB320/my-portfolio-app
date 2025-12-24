import { db } from "~/db";
import type { Route } from "./+types/project";
import { projects } from "~/db/schema";
import { eq } from "drizzle-orm";
import { Badge } from "~/components/ui/badge";

export async function loader({ params }: Route.LoaderArgs) {
  const projectSlug = params.slug;
  const project = await db
    .select()
    .from(projects)
    .where(eq(projects.slug, projectSlug));

  return { project };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Myb Portfolio" },
    { name: "description", content: "Welcome Mohamed Yasser Portfolio" },
  ];
}

export default function Project({ loaderData }: Route.ComponentProps) {
  const { project } = loaderData;
  return (
    <section className="mx-auto container py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 max-w-7xl">
      <div className="py-8 md:pb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-2">
          {project[0].title}
        </h2>
        <p className="text-muted-foreground">{project[0].description}</p>
      </div>
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-8">
        <div className="w-full h-full md:w-1/3 rounded overflow-hidden">
          <img src={project[0].thumbnailUrl} alt={project[0].title} />
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-bold mb-2">Project Description</h3>
          <p className="">{project[0].content}</p>
          <ul className="flex items-center gap-2 pt-4">
            {project[0].technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </ul>
        </div>
      </div>
      <h3 className="text-xl font-bold my-4">Project Images</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {project[0].imagesUrl.map((url) => (
          <img key={url} src={url} />
        ))}
      </div>
    </section>
  );
}
