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
