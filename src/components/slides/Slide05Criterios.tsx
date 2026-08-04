import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Chip } from "@/components/ui/Chip";
import { criteriaItems, type CriteriaItem } from "@/data/slides";

const iconPaths: Record<string, string> = {
  cog: "M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z",
  dollar: "M12 1v22 M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
  users:
    "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75",
  leaf: "M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-3.8 10-10 10z M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
  building:
    "M3 21h18 M9 8h1 M9 12h1 M9 16h1 M14 8h1 M14 12h1 M14 16h1 M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16",
  refresh:
    "M23 4v6h-6 M1 20v-6h6 M3.51 9a9 9 0 0114.85-3.36L23 10 M1 14l4.64 4.36A9 9 0 0020.49 15"
};

function CriteriaModal({
  item,
  onClose
}: {
  item: CriteriaItem;
  onClose: () => void;
}) {
  const { modal } = item;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      {/* Panel */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] bg-surface-container border border-outline-variant/30 rounded-2xl overflow-y-auto shadow-2xl"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-colors cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary-container/15 border border-primary/20 flex items-center justify-center mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d={iconPaths[item.icon]} />
              </svg>
            </div>
            <h3 className="font-sora text-xl md:text-2xl font-bold text-on-surface mb-1">
              {item.name}
            </h3>
            <p className="font-inter text-sm text-on-surface-variant">
              {item.description}
            </p>
          </div>

          {/* Explanation */}
          <div className="mb-6">
            <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
              {modal.explanation}
            </p>
          </div>

          {/* Key Questions */}
          <div className="mb-6">
            <h4 className="font-jetbrains text-xs text-primary tracking-widest uppercase mb-3">
              Preguntas clave
            </h4>
            <ul className="flex flex-col gap-2">
              {modal.keyQuestions.map((q) => (
                <li
                  key={q}
                  className="flex items-start gap-2 font-inter text-sm text-on-surface-variant leading-relaxed"
                >
                  <span className="text-primary mt-0.5 flex-shrink-0">?</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tips */}
          <div className="mb-6">
            <h4 className="font-jetbrains text-xs text-secondary tracking-widest uppercase mb-3">
              Consejo
            </h4>
            <div className="bg-secondary-container/10 border border-secondary/20 rounded-lg p-4">
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed italic">
                {`"${modal.tips}"`}
              </p>
            </div>
          </div>

          {/* Example */}
          <div>
            <h4 className="font-jetbrains text-xs text-tertiary tracking-widest uppercase mb-3">
              Ejemplo práctico
            </h4>
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-lg p-4">
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                {modal.example}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CriteriaCard({
  item,
  onClick
}: {
  item: CriteriaItem;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.02 }}
      onClick={onClick}
      className="bg-surface-container border border-outline-variant/20 rounded-xl p-5 flex flex-col items-start gap-3 hover:border-primary/30 transition-colors duration-200 cursor-pointer group"
    >
      <div className="w-10 h-10 rounded-lg bg-primary-container/15 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d={iconPaths[item.icon]} />
        </svg>
      </div>

      <div className="w-full">
        <h3 className="font-sora text-sm font-semibold text-on-surface mb-1">
          {item.name}
        </h3>
        <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Click hint */}
      <div className="mt-auto pt-2 flex items-center gap-1 text-on-surface-variant/50 group-hover:text-primary/70 transition-colors">
        <span className="font-jetbrains text-[10px] tracking-wider uppercase">
          Ver detalle
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="group-hover:translate-x-0.5 transition-transform"
        >
          <path
            d="M4.5 2.5L8 6L4.5 9.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}

export function Slide05Criterios() {
  const [selected, setSelected] = useState<CriteriaItem | null>(null);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3"
      >
        <Chip color="secondary">SLIDE 05</Chip>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sora text-2xl md:text-4xl font-bold text-on-surface text-center mb-3"
      >
        Criterios de Evaluación
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="font-inter text-sm md:text-base text-on-surface-variant text-center max-w-2xl mb-8"
      >
        Seis dimensiones para evaluar las alternativas de forma integral
      </motion.p>

      <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 gap-4">
        {criteriaItems.map((item) => (
          <CriteriaCard
            key={item.id}
            item={item}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <span className="font-jetbrains text-xs text-on-surface-variant/50 tracking-widest">
          04 / 08
        </span>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <CriteriaModal item={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
