import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { keyQuestions, type KeyQuestion } from "@/data/slides";

function SlideModal({
  question,
  onClose
}: {
  question: KeyQuestion;
  onClose: () => void;
}) {
  const { modal } = question;

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
            <div className="flex items-center gap-2 mb-2">
              <Chip color="tertiary">{question.phase}</Chip>
              <span className="font-jetbrains text-xs text-on-surface-variant">
                {question.progress}%
              </span>
            </div>
            <h3 className="font-sora text-xl md:text-2xl font-bold text-on-surface mb-1">
              {question.question}
            </h3>
            <p className="font-sora text-sm text-primary font-medium">
              {modal.subtitle}
            </p>
          </div>

          {/* Explanation */}
          <div className="mb-6">
            <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
              {modal.explanation}
            </p>
          </div>

          {/* Methodologies */}
          <div className="mb-6">
            <h4 className="font-jetbrains text-xs text-primary tracking-widest uppercase mb-3">
              Metodologías aplicables
            </h4>
            <div className="flex flex-col gap-3">
              {modal.methodologies.map((m) => (
                <div
                  key={m.name}
                  className="bg-surface-container-high border border-outline-variant/20 rounded-lg p-4"
                >
                  <h5 className="font-sora text-sm font-semibold text-on-surface mb-1">
                    {m.name}
                  </h5>
                  <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Example */}
          <div>
            <h4 className="font-jetbrains text-xs text-secondary tracking-widest uppercase mb-3">
              {modal.example.title}
            </h4>
            <div className="bg-surface-container-low border border-outline-variant/20 rounded-lg p-4">
              <ul className="flex flex-col gap-2">
                {modal.example.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-inter text-xs text-on-surface-variant leading-relaxed"
                  >
                    <span className="text-primary mt-0.5 flex-shrink-0">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Slide04Preguntas() {
  const [selected, setSelected] = useState<KeyQuestion | null>(null);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3"
      >
        <Chip color="tertiary">Sección 03 / Análisis</Chip>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sora text-2xl md:text-4xl font-bold text-on-surface text-center mb-3"
      >
        El Núcleo del Análisis
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-inter text-sm md:text-base text-on-surface-variant text-center max-w-xl mb-10"
      >
        Tres preguntas fundamentales guían el proceso de análisis de
        alternativas y estructuran la toma de decisiones.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
        {keyQuestions.map((q, i) => (
          <motion.div
            key={q.phase}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.15 }}
          >
            <Card
              active={q.active}
              className="p-5 h-full flex flex-col cursor-pointer group hover:border-primary/40 transition-colors"
              onClick={() => setSelected(q)}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-jetbrains text-xs text-on-surface-variant tracking-widest uppercase">
                  {q.phase}
                </span>
                {q.active && (
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                )}
              </div>

              <div className="mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className={`mb-3 ${q.active ? "text-primary" : "text-on-surface-variant group-hover:text-primary"} transition-colors`}
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <text
                    x="16"
                    y="20"
                    textAnchor="middle"
                    fill="currentColor"
                    fontSize="14"
                    fontFamily="Sora"
                    fontWeight="700"
                  >
                    {q.phase.replace("Fase", "")}
                  </text>
                </svg>
              </div>

              <h3 className="font-sora text-lg font-semibold text-on-surface mb-2">
                {q.question}
              </h3>

              <p className="font-inter text-sm text-on-surface-variant leading-relaxed mb-4 flex-1">
                {q.desc}
              </p>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-jetbrains text-[10px] text-on-surface-variant tracking-wider uppercase">
                    Progreso
                  </span>
                  <span className="font-jetbrains text-[10px] text-on-surface-variant">
                    {q.progress}%
                  </span>
                </div>
                <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${q.active ? "bg-primary" : "bg-outline-variant/60"}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${q.progress}%` }}
                    transition={{
                      delay: 0.8 + i * 0.2,
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </div>

              {/* Click hint */}
              <div className="mt-3 flex items-center gap-1 text-on-surface-variant/50 group-hover:text-primary/70 transition-colors">
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
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <span className="font-jetbrains text-xs text-on-surface-variant/50 tracking-widest">
          03 / 08
        </span>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <SlideModal question={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
