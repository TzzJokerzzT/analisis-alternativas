import { motion } from "motion/react";
import { Stepper } from "@/components/ui/Stepper";
import { Chip } from "@/components/ui/Chip";
import { stepperStages } from "@/data/slides";

export function Slide02Ubicacion() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3"
      >
        <Chip color="primary">Ubicación en el Ciclo</Chip>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sora text-2xl md:text-4xl font-bold text-on-surface text-center mb-10"
      >
        Fase de Planificación
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-3xl mb-10"
      >
        <Stepper stages={stepperStages} activeIndex={3} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="relative bg-surface-container/60 backdrop-blur-sm border border-outline-variant/20 rounded-xl p-6 md:p-8">
          <div className="absolute top-0 left-6 -translate-y-1/2 bg-primary-container px-3 py-1 rounded-full">
            <span className="font-jetbrains text-[10px] text-on-primary tracking-widest uppercase">
              Frase clave
            </span>
          </div>
          <blockquote className="font-inter text-base md:text-lg text-on-surface leading-relaxed italic mt-2">
            &ldquo;El análisis de alternativas conecta el{" "}
            <span className="text-primary font-medium not-italic">
              árbol de objetivos
            </span>{" "}
            con la{" "}
            <span className="text-primary font-medium not-italic">
              estrategia final
            </span>{" "}
            de intervención.&rdquo;
          </blockquote>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-8 h-px bg-primary/40" />
            <span className="font-jetbrains text-xs text-on-surface-variant tracking-wider">
              Marco Lógico
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
