import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";

interface Slide01Props {
  onNext: () => void;
  total: number;
}

export function Slide01Portada({ onNext, total }: Slide01Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-outline-variant/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-outline-variant/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full bg-primary/5 border border-primary/20" />
      </div>

      {/* Central emblem */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
        className="relative mb-8"
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary-container/30 border-2 border-primary/30 flex items-center justify-center shadow-[0_0_40px_rgba(78,222,163,0.15)]">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            className="md:w-16 md:h-16"
          >
            <path
              d="M24 4L4 14V34L24 44L44 34V14L24 4Z"
              stroke="#4edea3"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M24 14L14 19V29L24 34L34 29V19L24 14Z"
              fill="#4edea3"
              fillOpacity="0.15"
              stroke="#4edea3"
              strokeWidth="1.5"
            />
            <circle cx="24" cy="24" r="4" fill="#4edea3" fillOpacity="0.6" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-4"
      >
        <Chip color="primary">Metodología del Marco Lógico</Chip>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="font-sora text-4xl md:text-7xl font-extrabold text-on-surface text-center leading-tight tracking-tight mb-6 max-w-3xl"
        style={{ letterSpacing: "-0.04em" }}
      >
        Análisis de <span className="text-primary">Alternativas</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="font-inter text-base md:text-lg text-on-surface-variant text-center max-w-xl mb-10 leading-relaxed"
      >
        Evaluación sistemática de opciones para la selección de la estrategia
        más conveniente en un proyecto del Marco Lógico.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Button onClick={onNext} size="lg">
          Comenzar recorrido →
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <span className="font-jetbrains text-xs text-on-surface-variant/50 tracking-widest">
          SLIDE 01 // {total}
        </span>
      </motion.div>
    </div>
  );
}
