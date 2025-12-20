import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "./components/navBar";
import { useEffect, useState } from "react";
import LoadingSection from "./components/LoadingSection";
import { animateValue } from "./lib/constents";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import welcomeSound from "@/assets/welcome.mp3";
import { ExperienceSection } from "./components/ExperienceSection";
import { ArrowDown } from "lucide-react";

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
        <div className="relative h-screen w-full">
            <NavBar />
          <Spotlight
            className="bg-primary blur-2xl"
            size={96}
            springOptions={{
              bounce: 0.3,
              duration: 0.1,
            }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative size-32 rounded-full overflow-hidden mx-auto">
              <img
                src="/myb.jpg"
                alt="Logo"
                className="object-cover size-full grayscale-50"
              />
              <div className="absolute inset-0 dark:bg-black/30" />
            </div>
            <div className="text-center pt-4">
              <h1 className="text-2xl font-black tracking-tight">
                Mohamed Yasser Boureghida
              </h1>
              <p className="text-lg font-semibold">software engineer</p>
              <p className="tracking-wide font-light">
                Passionate about building scalable & user-friendly web
                applications
              </p>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center">
            <div className="animate-bounce bg-card rounded-full border border-accent p-2">
              <ArrowDown className="size-5" />
            </div>
          </div>
        </div>
        <div className="mx-auto container py-8 max-w-6xl">
          <ExperienceSection />
        </div>
      </LoadingSection>
    </ThemeProvider>
  );
}
