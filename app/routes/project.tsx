import type { Route } from "./+types/project";

export async function loader({ params }: Route.LoaderArgs) {
  const projectSlug = params.slug;
  return projectSlug;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Myb Portfolio" },
    { name: "description", content: "Welcome Mohamed Yasser Portfolio" },
  ];
}

export default function Project({ loaderData }: Route.ComponentProps) {
  return (
    <section className="mx-auto container py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 max-w-7xl">
      <h2 className="text-2xl font-bold tracking-tight mb-8">
        Project - {loaderData}
      </h2>
    </section>
  );
}
