import type { Route } from "./+types/home";
import { db } from "~/db";
import { projects } from "~/db/schema";
import { ExperienceSection } from "~/components/ExperienceSection";
import HeroSection from "~/components/HeroSection";
import { AboutSection } from "~/components/AboutSection";
import { SkillsSection } from "~/components/skillsSection";
import { ProjectsSection } from "~/components/ProjectsSection";
import { FooterSection } from "~/components/FooterSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Myb Portfolio" },
    { name: "description", content: "Welcome Mohamed Yasser Portfolio" },
  ];
}
export async function loader({}: Route.LoaderArgs) {
  const projectsPromise = await db.select().from(projects).limit(3);

  return {
    projects: projectsPromise,
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
