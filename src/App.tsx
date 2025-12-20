import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "./components/navBar";
import { useEffect, useState } from "react";
import LoadingSection from "./components/LoadingSection";
import { animateValue } from "./lib/constents";
import welcomeSound from "@/assets/welcome.mp3";
import { ExperienceSection } from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";

export default function App() {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (value === 100) {
      const audio = new Audio(welcomeSound);
      audio.play().catch((err) => console.log("Audio play failed:", err));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return;
    }

    animateValue(setValue, value);
  }, [value, setIsLoading]);

  return (
    <ThemeProvider>
      <LoadingSection isloading={isLoading} value={value}>
        <NavBar />
        <HeroSection />
        <ExperienceSection />
      </LoadingSection>
    </ThemeProvider>
  );
}
