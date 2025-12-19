import { motion } from "motion/react";
import { SlidingNumber } from "@/components/motion-primitives/sliding-number";

export default function LoadingSection({
  value,
  isloading,
  children,
}: {
  value: number;
  isloading: boolean;
  children: React.ReactNode;
}) {
  if (isloading) {
    return (
      <motion.div
        animate={{
          opacity: value === 100 ? 0 : 100,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="h-screen flex items-end justify-between overflow-hidden"
      >
        <div className="flex flex-1 flex-col gap-8 text-2xl p-8">
          <h1>Loading...</h1>
          <div className="flex text-8xl">
            <SlidingNumber value={value} />%
          </div>
        </div>
        <div className="flex items-end gap-4 pr-4 h-full">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="w-14 rounded-t-lg bg-primary"
              animate={{
                height: value > 60 ? ["30%", "100%", "10%"] : "30%",
              }}
              transition={{
                duration: value > 90 ? 2 : 0.6,
                repeat: value > 60 ? Infinity : 0,
                repeatType: "mirror",
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    );
  }
  return (
    <motion.div
      animate={{
        opacity: 100,
      }}
      transition={{
        duration: 0.4,
        ease: "easeIn",
      }}
    >
      {children}
    </motion.div>
  );
}
