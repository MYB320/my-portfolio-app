import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "~/lib/utils";

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export function ProjectImageCarousel({ images, title }: ProjectImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        let nextIndex = prev + newDirection;
        if (nextIndex < 0) nextIndex = images.length - 1;
        if (nextIndex >= images.length) nextIndex = 0;
        return nextIndex;
      });
    },
    [images.length]
  );

  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate, isFullscreen]);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4 my-8">
      {/* Main Showcase Frame */}
      <div className="relative group rounded-2xl overflow-hidden border border-border/50 bg-muted/30 aspect-video shadow-lg">
        {/* Carousel Slide */}
        <div className="w-full h-full relative overflow-hidden flex items-center justify-center bg-black/5 dark:bg-black/40">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${title} screenshot ${currentIndex + 1}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.25 },
              }}
              className="w-full h-full object-contain cursor-pointer select-none"
              onClick={() => setIsFullscreen(true)}
            />
          </AnimatePresence>
        </div>

        {/* Navigation Overlay Controls */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background text-foreground border border-border/60 shadow-md backdrop-blur-md flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background text-foreground border border-border/60 shadow-md backdrop-blur-md flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Top-Right Fullscreen / Zoom Button */}
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setIsFullscreen(true)}
          className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-background/80 hover:bg-background border border-border/60 shadow-sm backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
          title="View Fullscreen"
        >
          <Maximize2 className="w-4 h-4" />
        </Button>

        {/* Bottom Badge Counter */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/10 select-none z-10">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToIndex(idx)}
              className={cn(
                "relative flex-shrink-0 w-24 sm:w-28 aspect-video rounded-lg overflow-hidden border-2 transition-all duration-200 bg-muted",
                idx === currentIndex
                  ? "border-primary ring-2 ring-primary/20 scale-[1.03] opacity-100 shadow-sm"
                  : "border-border/60 opacity-60 hover:opacity-100 hover:border-border"
              )}
            >
              <img
                src={img}
                alt={`${title} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox / Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              aria-label="Close fullscreen view"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="relative max-w-6xl max-h-[85vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentIndex]}
                alt={`${title} screenshot ${currentIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => paginate(-1)}
                    className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-105"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => paginate(1)}
                    className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-105"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
