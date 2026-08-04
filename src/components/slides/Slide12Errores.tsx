import { motion } from "motion/react";

const errors = [
  {
    id: 1,
    title: "Comparar con un único criterio",
    description:
      "Comparar alternativas usando un único criterio (normalmente el costo) e ignorar viabilidad social, ambiental o institucional.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    color: "text-error",
    bgColor: "bg-error/10"
  },
  {
    id: 2,
    title: "Asumir criterios con igual peso",
    description:
      "Asumir implícitamente que todos los criterios pesan igual sin justificarlo. El resultado de la suma aritmética descansa en el supuesto implícito de que todos los criterios tienen la misma importancia.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v18M3 12h18" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    id: 3,
    title: "Pocas acciones por medio",
    description:
      "Generar muy pocas acciones por medio, limitando artificialmente el abanico de alternativas.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <path d="M9 10l2 2 4-4" />
      </svg>
    ),
    color: "text-tertiary",
    bgColor: "bg-tertiary/10"
  },
  {
    id: 4,
    title: "Confundir complementarias con excluyentes",
    description:
      "No distinguir acciones complementarias de acciones excluyentes al armar las alternativas.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
      </svg>
    ),
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    id: 5,
    title: "Saltar a la Matriz de Marco Lógico",
    description:
      "Saltar directamente a la Matriz de Marco Lógico sin documentar por qué se descartaron las demás alternativas (afecta la trazabilidad del diseño ante financiadores).",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10,9 9,9 8,9" />
      </svg>
    ),
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  }
];

export function Slide12Errores() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-error/15 text-error border border-error/20">
          Errores Comunes
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sora text-2xl md:text-4xl font-bold text-on-surface text-center mb-2"
      >
        Errores Frecuentes en la Práctica
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-inter text-sm md:text-base text-on-surface-variant text-center max-w-2xl mb-10"
      >
        Evita caer en los errores más comunes al momento de evaluar alternativas
      </motion.p>

      {/* Errors list */}
      <div className="w-full max-w-3xl space-y-4">
        {errors.map((error, i) => (
          <motion.div
            key={error.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="flex items-start gap-4 p-4 rounded-xl bg-surface-container border border-outline-variant/20 hover:border-primary transition-all duration-200"
          >
            {/* Icon */}
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-lg ${error.bgColor} flex items-center justify-center ${error.color}`}
            >
              {error.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-sora text-sm md:text-base font-semibold text-on-surface mb-1">
                {error.title}
              </h3>
              <p className="font-inter text-xs md:text-sm text-on-surface-variant leading-relaxed">
                {error.description}
              </p>
            </div>

            {/* Error number */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-error/10 flex items-center justify-center">
              <span className="font-jetbrains text-xs font-bold text-error">
                {error.id}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer tip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20 max-w-2xl"
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          </div>
          <div>
            <p className="font-sora text-xs md:text-sm font-semibold text-on-surface mb-1">
              Recuerda
            </p>
            <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
              Un análisis de alternativas bien fundamentado es la base de un
              proyecto con trazabilidad. Documenta tus decisiones y justifica
              por qué descartaste las opciones que no elegiste.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
