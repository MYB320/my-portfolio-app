import { Spotlight } from "@/components/motion-primitives/spotlight";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      <Spotlight
        className="bg-primary blur-2xl"
        size={96}
        springOptions={{
          bounce: 0.3,
          duration: 0.1,
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 w-full max-w-2xl">
        <div className="relative size-24 md:size-32 rounded-full overflow-hidden mx-auto">
          <img
            src="/myb.jpg"
            alt="Logo"
            className="object-cover size-full grayscale-50"
          />
          <div className="absolute inset-0 dark:bg-black/30" />
        </div>
        <div className="text-center pt-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight">
            Mohamed Yasser Boureghida
          </h1>
          <p className="text-base md:text-lg font-semibold">
            software engineer
          </p>
          <p className="text-sm md:text-base tracking-wide font-light px-4">
            Passionate about building scalable & user-friendly web applications
          </p>
        </div>
      </div>
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex justify-center">
        <div className="animate-bounce bg-card rounded-full border border-accent p-2">
          <ArrowDown className="size-4 md:size-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
