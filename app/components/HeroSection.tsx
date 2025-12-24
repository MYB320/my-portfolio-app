import { Spotlight } from "~/components/ui/spotlight";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import GridBackground from "./gridBackground";
import myb from "~/assets/myb.jpg";

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
    <div className="relative min-h-dvh w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
      <GridBackground />
      <Spotlight
        className="bg-primary blur-2xl"
        size={128}
        springOptions={{
          bounce: 0.3,
          duration: 0.1,
        }}
      />

      <div className="absolute top-16 md:top-28 lg:top-32 left-4 md:left-16 lg:left-32 overflow-hidden">
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
            className="text-xl md:text-3xl lg:text-4xl font-black text-foreground/75"
          >
            {greetings[currentGreeting]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div className="w-full max-w-6xl mx-auto z-10">
        <div className="mx-auto max-w-fit pb-6 md:text-left">
          <p className="text-sm md:text-lg text-secondary">my name is</p>
          <h1 className="text-xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Mohamed Yasser Boureghida
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <div className="relative size-16 md:size-24 rounded-full overflow-hidden border-4 border-primary">
            <img
              src={myb}
              alt="Mohamed Yasser Boureghida"
              className="object-cover size-full"
            />
            <div className="absolute inset-0 dark:bg-black/35" />
          </div>

          <div className="text-center md:text-left space-y-1">
            <h2 className="text-lg md:text-2xl font-semibold">
              Software Engineer
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Passionate about building scalable & user-friendly applications
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 flex justify-center">
        <div className="animate-bounce bg-card rounded-full border border-accent p-2 sm:p-2.5">
          <ArrowDown className="size-4 md:size-6" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
