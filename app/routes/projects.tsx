import { ProjectCard } from "~/components/projectCard";
import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Myb Portfolio - Projects" },
    { name: "description", content: "Welcome Mohamed Yasser Portfolio" },
  ];
}

export default function Projects({}: Route.ComponentProps) {
  const fakeprojects = [
    {
      title: "Project 1",
      tech: ["React", "Next.js"],
      urllink: "/projects/project1",
      imageSrc:
        "https://protfolio-iota-sage.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmyb2003dev%2Fimage%2Fupload%2Fv1704896834%2Fprojects%2Fpggmipqmitiuqgp1ffqn.jpg&w=640&q=75",
    },
    {
      title: "Project 2",
      tech: ["Vue.js", "Nuxt.js"],
      urllink: "/projects/project2",
      imageSrc: "https://example.com/project2.jpg",
    },
    {
      title: "Project 3",
      tech: ["React Native", "Expo"],
      urllink: "/projects/project3",
      imageSrc:
        "https://cdn.dribbble.com/userupload/4404094/file/original-23ac74776d4a0452b9decfda4219b479.png?resize=1024x768&vertical=center",
    },
  ];

  return (
    <section className="mx-auto container py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 max-w-7xl">
      <div className="py-8 md:pb-12">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fakeprojects.map(({ title, tech, urllink, imageSrc }, index) => (
          <ProjectCard
            key={index}
            title={title}
            tech={tech}
            urllink={urllink}
            imageSrc={imageSrc}
          />
        ))}
      </div>
    </section>
  );
}
