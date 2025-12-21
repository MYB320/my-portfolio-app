import { Spotlight } from "@/components/motion-primitives/spotlight";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import GridBackground from "./gridBackground";
import myb from "@/assets/myb.jpg";

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
    <div className="relative min-h-dvh w-full flex flex-col justify-center items-center">
      <GridBackground />
      <Spotlight
        className="bg-primary blur-2xl"
        size={128}
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
            className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground/75"
          >
            {greetings[currentGreeting]}
          </motion.h1>
        </AnimatePresence>
      </div>
      <div className="max-w-6xl z-10">
        <div className="max-w-fit mx-auto space-y-2 pb-8">
          <p className="text-lg md:text-xl text-secondary">my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Mohamed Yasser Boureghida
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="relative size-20 md:size-24 rounded-full overflow-hidden border-4 border-primary">
            <img src={myb} alt="Logo" className="object-cover size-full" />
            <div className="absolute inset-0 dark:bg-black/35" />
          </div>
          <div className="">
            <h2 className="text-xl md:text-2xl font-semibold">
              Software Engineer
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Passionate about building scalable & user-friendly applications
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-16 md:bottom-12 left-1/2 -translate-x-1/2 flex justify-center">
        <div className="animate-bounce bg-card rounded-full border border-accent p-2">
          <ArrowDown className="size-4 md:size-5" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
