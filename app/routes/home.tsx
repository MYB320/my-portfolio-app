import type { Route } from "./+types/home";
import { db } from "~/db";
import { ExperienceSection } from "~/components/ExperienceSection";
import HeroSection from "~/components/HeroSection";
import { AboutSection } from "~/components/AboutSection";
import { SkillsSection } from "~/components/skillsSection";
import { ProjectsSection } from "~/components/ProjectsSection";
import { FooterSection } from "~/components/FooterSection";
import { defaultProjects, type ProjectItem } from "~/lib/projectsData";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Myb Portfolio" },
    { name: "description", content: "Welcome Mohamed Yasser Portfolio" },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  try {
    const dbProjects = await db.query.projects.findMany({
      limit: 3,
      with: {
        techStack: true,
        features: true,
        challenges: true,
        outcomes: true,
      },
    });

    if (dbProjects && dbProjects.length > 0) {
      const formatted: ProjectItem[] = dbProjects.map((p) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        description: p.description,
        image: p.image,
        link: p.link,
        github: p.github,
        fullDescription: p.fullDescription,
        technologies: p.techStack.map((t) => t.name),
        features: p.features,
        techStack: p.techStack,
        challenges: p.challenges,
        outcomes: p.outcomes,
      }));
      return { projects: formatted };
    }
  } catch (error) {
    console.warn("Could not fetch projects from DB, using fallback projects:", error);
  }

  return {
    projects: defaultProjects.slice(0, 3),
  };
}

export default function Home({}: Route.ComponentProps) {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <FooterSection />
    </>
  );
}
