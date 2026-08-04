import { motion } from "motion/react";
import { TreeDiagram } from "@/components/ui/TreeDiagram";
import { Chip } from "@/components/ui/Chip";
import { eapTree } from "@/data/slides";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export function Slide07EAP() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3"
      >
        <Chip>SLIDE 07 — ESTRUCTURA ANALÍTICA DEL PROYECTO (EAP)</Chip>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sora text-2xl md:text-4xl font-bold text-on-surface text-center mb-8"
      >
        Estructura Final de la Estrategia
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl"
      >
        <motion.div variants={itemVariants}>
          <TreeDiagram tree={eapTree} />
        </motion.div>
      </motion.div>
    </div>
  );
}
