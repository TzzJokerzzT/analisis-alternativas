import { motion } from "motion/react";
import { Checklist } from "@/components/ui/Checklist";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { checklistItems } from "@/data/slides";

interface Slide08Props {
  onGoTo: (n: number) => void;
}

export function Slide08Cierre({ onGoTo }: Slide08Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3"
      >
        <Chip color="primary">Cierre</Chip>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sora text-2xl md:text-4xl font-bold text-on-surface text-center mb-3"
      >
        ¿Todo listo para decidir?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-inter text-sm md:text-base text-on-surface-variant text-center max-w-xl mb-8"
      >
        Preguntas de control antes de la selección final
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-xl mb-8"
      >
        <Checklist items={checklistItems} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <Button variant="primary" size="lg" onClick={() => onGoTo(1)}>
          Volver al inicio
        </Button>
        <Button variant="outline" size="lg">
          Descargar plantilla
        </Button>
      </motion.div>
    </div>
  );
}
