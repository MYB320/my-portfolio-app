import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "./components/navBar";
import { useEffect, useState } from "react";
import LoadingSection from "./components/LoadingSection";
import { animateValue } from "./lib/constents";
import { ExperienceSection } from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/skillsSection";

export default function App() {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (value === 100) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }

    animateValue(setValue, value);
  }, [value]);

  return (
    <ThemeProvider>
      <LoadingSection isloading={isLoading} value={value}>
        <NavBar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
      </LoadingSection>
    </ThemeProvider>
  );
}
