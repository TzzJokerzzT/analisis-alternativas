import { motion } from "motion/react";
import { Chip } from "@/components/ui/Chip";

const steps = [
  {
    num: "01",
    title: "Definir los Criterios",
    desc: "Cada fila representa un criterio de evaluación (técnico, económico, social, etc.) que usaremos para comparar las alternativas.",
    highlight: "FILAS = CRITERIOS"
  },
  {
    num: "02",
    title: "Asignar Pesos",
    desc: "Cada criterio recibe un peso (0-1) que indica su importancia relativa. Los pesos deben sumar 1.00. Puedes ajustarlos con los controles deslizantes.",
    highlight: "PESOS = IMPORTANCIA"
  },
  {
    num: "03",
    title: "Calificar Cada Alternativa",
    desc: "Para cada combinación criterio-alternativa, asigna una calificación del 1 al 5. Haz clic en cualquier celda de la tabla para editarla directamente.",
    highlight: "CALIFICACIÓN = 1 A 5"
  },
  {
    num: "04",
    title: "Calcular el Total Ponderado",
    desc: "El sistema multiplica automáticamente: Peso × Calificación para cada celda, y suma los resultados por alternativa. La alternativa con mayor puntaje gana.",
    highlight: "TOTAL = Σ (PESO × CALIFICACIÓN)"
  }
];

const formulaExample = [
  { criterion: "Técnica", weight: 0.2, score: 5, result: 1.0 },
  { criterion: "Económica", weight: 0.3, score: 2, result: 0.6 },
  { criterion: "Social", weight: 0.1, score: 5, result: 0.5 },
  { criterion: "Ambiental", weight: 0.1, score: 3, result: 0.3 },
  { criterion: "Institucional", weight: 0.15, score: 3, result: 0.45 },
  { criterion: "Sustentabilidad", weight: 0.15, score: 5, result: 0.75 },
  { criterion: "", weight: 1.0, score: 0, result: 3.6 }
];

export function Slide05cTablaExplicacion() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3"
      >
        <Chip color="secondary">Cómo Funciona la Tabla</Chip>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sora text-2xl md:text-4xl font-bold text-on-surface text-center mb-2"
      >
        Matriz Ponderada
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="font-inter text-sm md:text-base text-on-surface-variant text-center max-w-2xl mb-8"
      >
        La matriz es una herramienta que combina pesos y calificaciones para
        obtener un resultado cuantitativo y objetivable.
      </motion.p>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Steps */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-surface-container border border-outline-variant/20 rounded-xl p-4 flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="font-jetbrains text-sm font-bold text-primary">
                  {step.num}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-sora text-sm font-semibold text-on-surface mb-1">
                  {step.title}
                </h3>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed mb-2">
                  {step.desc}
                </p>
                <span className="font-jetbrains text-[10px] text-primary tracking-widest">
                  {step.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Example calculation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-surface-container-high border border-outline-variant/20 rounded-xl p-5"
        >
          <h3 className="font-sora text-sm font-semibold text-on-surface mb-4">
            Ejemplo: Alt. 2 (Mantenimiento Propio)
          </h3>

          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse min-w-[300px]">
              <thead>
                <tr className="border-b border-outline-variant/30">
                  <th className="text-left py-2 px-2 font-jetbrains text-[10px] tracking-wider uppercase text-on-surface-variant">
                    Criterio
                  </th>
                  <th className="text-center py-2 px-2 font-jetbrains text-[10px] tracking-wider uppercase text-on-surface-variant">
                    Peso
                  </th>
                  <th className="text-center py-2 px-2 font-jetbrains text-[10px] tracking-wider uppercase text-on-surface-variant">
                    Cal.
                  </th>
                  <th className="text-center py-2 px-2 font-jetbrains text-[10px] tracking-wider uppercase text-on-surface-variant">
                    Resultado
                  </th>
                </tr>
              </thead>
              <tbody>
                {formulaExample.map((row, i) => {
                  const isTotal = i === formulaExample.length - 1;
                  return (
                    <tr
                      key={row.criterion}
                      className={`border-b border-outline-variant/10 ${
                        isTotal
                          ? "border-t-2 border-primary/30 bg-surface-container/50"
                          : ""
                      }`}
                    >
                      <td
                        className={`py-2 px-2 font-inter text-xs ${
                          isTotal
                            ? "font-semibold text-on-surface"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {row.criterion || "TOTAL"}
                      </td>
                      <td className="py-2 px-2 text-center font-jetbrains text-xs text-secondary">
                        {row.weight > 0 ? row.weight.toFixed(2) : "1.00"}
                      </td>
                      <td className="py-2 px-2 text-center font-jetbrains text-xs text-on-surface-variant">
                        {row.score > 0 ? row.score : "-"}
                      </td>
                      <td
                        className={`py-2 px-2 text-center font-jetbrains text-xs font-bold ${
                          isTotal ? "text-primary" : "text-on-surface-variant"
                        }`}
                      >
                        {row.result.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-3 border-t border-outline-variant/20">
            <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
              <span className="text-primary font-medium">Fórmula:</span>{" "}
              <span className="font-jetbrains text-[11px]">
                0.20×5 + 0.30×2 + 0.10×5 + 0.10×3 + 0.15×3 + 0.15×5 = 3.60
              </span>
            </p>
          </div>

          <div className="mt-3 bg-primary/10 border border-primary/20 rounded-lg p-3">
            <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
              <span className="text-primary font-medium">Tip:</span> En la
              siguiente slide podrás editar tanto los pesos como las
              calificaciones para ver cómo cambia el resultado en tiempo real.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
