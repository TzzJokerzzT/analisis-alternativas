import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";

interface SlideContainerProps {
  children: ReactNode;
  slideIndex: number;
  direction: number;
}

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0
  })
};

const mobileVariants: Variants = {
  enter: { opacity: 0, y: 40 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 }
};

export function SlideContainer({
  children,
  slideIndex,
  direction
}: SlideContainerProps) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <motion.div
      key={slideIndex}
      custom={direction}
      variants={isMobile ? mobileVariants : variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }}
      className="w-full h-full flex-shrink-0 flex items-center justify-center"
      role="region"
      aria-live="polite"
      aria-label={`Slide ${slideIndex + 1}`}
    >
      {children}
    </motion.div>
  );
}
