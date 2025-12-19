import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "./components/navBar";
import { useEffect, useState } from "react";
import LoadingSection from "./components/LoadingSection";
import { animateValue } from "./lib/constents";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import welcomeSound from "@/assets/welcome.mp3";

export default function App() {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (value >= 100) {
      const audio = new Audio(welcomeSound); // or '/welcome.wav'
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
        <div className="relative h-screen w-full ">
          <NavBar />
          <Spotlight
            className="bg-primary blur-2xl"
            size={64}
            springOptions={{
              bounce: 0.3,
              duration: 0.1,
            }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "></div>
        </div>
      </LoadingSection>
    </ThemeProvider>
  );
}
