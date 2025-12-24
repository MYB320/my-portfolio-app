import type { Route } from "./+types/home";
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
