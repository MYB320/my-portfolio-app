import { Spotlight } from "@/components/motion-primitives/spotlight";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import GridBackground from "./gridBackground";

const HeroSection = () => {
  const greetings = [
    "Hello,",
    "Bonjour,",
    "مرحبا,",
    "Hola,",
    "Ciao,",
    "こんにちは,",
    "Привет,",
    "你好,",
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center">
      <GridBackground
        gridSize={40}
        lineThickness={0.4}
        lineColor="var(--accent-foreground)"
        backgroundColor="var(--accent)"
      />
      <Spotlight
        className="bg-primary blur-2xl"
        size={96}
        springOptions={{
          bounce: 0.3,
          duration: 0.1,
        }}
      />
      <div className="absolute top-20 md:top-28 lg:top-32 left-4 md:left-16 lg:left-32 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentGreeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground/50"
          >
            {greetings[currentGreeting]}
          </motion.h1>
        </AnimatePresence>
      </div>
      <div className="px-4 w-full max-w-2xl">
        <div className="relative size-24 md:size-32 rounded-full overflow-hidden mx-auto border-2 border-border">
          <img src="/myb.jpg" alt="Logo" className="object-cover size-full" />
          <div className="absolute inset-0 dark:bg-black/40" />
        </div>
        <div className="text-center pt-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight">
            Mohamed Yasser <span className="uppercase">Boureghida</span>
          </h1>
          <p className="text-base md:text-lg font-semibold">
            software engineer
          </p>
          <p className="text-sm md:text-base  font-light pt-2">
            Passionate about building scalable & user-friendly applications
          </p>
        </div>
      </div>
      <div className="absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 flex justify-center">
        <div className="animate-bounce bg-card rounded-full border border-accent p-2">
          <ArrowDown className="size-4 md:size-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
