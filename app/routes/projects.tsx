import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Myb Portfolio - Projects" },
    { name: "description", content: "Welcome Mohamed Yasser Portfolio" },
  ];
}

export default function Projects({}: Route.ComponentProps) {
  return (
    <section className="mx-auto container py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 max-w-7xl">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Projects</h2>
    </section>
  );
}
