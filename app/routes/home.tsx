import type { Route } from "./+types/home";
import { ExperienceSection } from "~/components/ExperienceSection";
import HeroSection from "~/components/HeroSection";
import { AboutSection } from "~/components/AboutSection";
import { SkillsSection } from "~/components/skillsSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Myb Portfolio" },
    { name: "description", content: "Welcome Mohamed Yasser Portfolio" },
  ];
}

export default function Home({}: Route.ComponentProps) {
  return (
    <section>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
    </section>
  );
}
