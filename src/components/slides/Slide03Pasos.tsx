import { motion } from "motion/react";
import { Timeline } from "@/components/ui/Timeline";
import { Chip } from "@/components/ui/Chip";
import { processSteps } from "@/data/slides";

export function Slide03Pasos() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3"
      >
        <Chip color="secondary">Paso 04</Chip>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sora text-2xl md:text-4xl font-bold text-on-surface text-center mb-10"
      >
        Pasos del Proceso
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-3xl"
      >
        <Timeline
          steps={processSteps.map((s, i) => ({
            ...s,
            highlighted: i === 4
          }))}
        />
      </motion.div>
    </div>
  );
}
