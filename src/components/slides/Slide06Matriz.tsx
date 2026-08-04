import { useMemo, useCallback } from "react";
import { motion } from "motion/react";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import type { Criteria, Alternative } from "@/data/matrixExample";

interface Slide06MatrizProps {
  criteria: Criteria[];
  setCriteria: React.Dispatch<React.SetStateAction<Criteria[]>>;
  alternatives: Alternative[];
  setAlternatives: React.Dispatch<React.SetStateAction<Alternative[]>>;
  onReset: () => void;
}

export function Slide06Matriz({
  criteria,
  setCriteria,
  alternatives,
  setAlternatives,
  onReset
}: Slide06MatrizProps) {
  const weightSum = useMemo(
    () => criteria.reduce((sum, c) => sum + c.weight, 0),
    [criteria]
  );

  const totals = useMemo(
    () =>
      alternatives.map((alt) =>
        criteria.reduce((sum, c) => sum + c.weight * alt.scores[c.id], 0)
      ),
    [criteria, alternatives]
  );

  const maxTotal = Math.max(...totals);
  const winnerIdx = totals.indexOf(maxTotal);
  const margin =
    totals.length === 2
      ? Math.abs(totals[0] - totals[1])
      : maxTotal - Math.min(...totals);

  const handleWeightChange = useCallback(
    (id: string, value: number) => {
      setCriteria((prev) =>
        prev.map((c) => (c.id === id ? { ...c, weight: value } : c))
      );
    },
    [setCriteria]
  );

  const handleScoreChange = useCallback(
    (altId: string, criterionId: string, value: number) => {
      setAlternatives((prev) =>
        prev.map((alt) =>
          alt.id === altId
            ? { ...alt, scores: { ...alt.scores, [criterionId]: value } }
            : alt
        )
      );
    },
    [setAlternatives]
  );

  const isWeightWarning = Math.abs(weightSum - 1.0) > 0.05;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3"
      >
        <Chip color="secondary">Slide 08</Chip>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sora text-2xl md:text-4xl font-bold text-on-surface text-center mb-2"
      >
        Evaluación de Alternativas
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="font-inter text-xs text-on-surface-variant text-center max-w-xl mb-6"
      >
        Ajusta los pesos y calificaciones para ver cómo cambia el resultado en
        tiempo real
      </motion.p>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6">
        {/* Left: Weights + Table */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex-1 flex flex-col gap-4"
        >
          {/* Weight sliders */}
          <div className="bg-surface-container border border-outline-variant/20 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-sora text-sm font-semibold text-on-surface">
                Pesos de Criterios
              </h3>
              <div className="flex items-center gap-3">
                <span
                  className={`font-jetbrains text-xs ${
                    isWeightWarning ? "text-error" : "text-primary"
                  }`}
                >
                  Σ = {weightSum.toFixed(2)}
                </span>
                <Button variant="ghost" size="sm" onClick={onReset}>
                  Restablecer
                </Button>
              </div>
            </div>

            {isWeightWarning && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mb-3 p-2 bg-error/10 border border-error/30 rounded-lg"
              >
                <span className="font-inter text-xs text-error">
                  ⚠ Los pesos deben sumar 1.00. Actualmente suman{" "}
                  {weightSum.toFixed(2)}
                </span>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {criteria.map((c) => (
                <div key={c.id} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-inter text-xs text-on-surface">
                      {c.name}
                    </span>
                    <span className="font-jetbrains text-xs text-secondary font-medium">
                      {(c.weight * 100).toFixed(0)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.5"
                    step="0.01"
                    value={c.weight}
                    onChange={(e) =>
                      handleWeightChange(c.id, parseFloat(e.target.value))
                    }
                    className="w-full h-1.5 bg-outline-variant/30 rounded-full appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
                      [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-2
                      [&::-webkit-slider-thumb]:border-surface [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer
                      [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-surface
                      [&::-moz-range-thumb]:cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Matrix table */}
          <div className="bg-surface-container border border-outline-variant/20 rounded-xl overflow-hidden">
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-outline-variant/30">
                    <th className="text-left py-3 px-3 font-jetbrains text-xs tracking-wider uppercase text-on-surface-variant">
                      Criterio
                    </th>
                    <th className="text-center py-3 px-3 font-jetbrains text-xs tracking-wider uppercase text-on-surface-variant">
                      Peso
                    </th>
                    {alternatives.map((alt) => (
                      <th
                        key={alt.id}
                        className="text-center py-3 px-3 font-jetbrains text-xs tracking-wider uppercase text-on-surface-variant"
                      >
                        {alt.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {criteria.map((c) => (
                    <tr
                      key={c.id}
                      className="border-b border-outline-variant/10 hover:bg-surface-container-high/50 transition-colors"
                    >
                      <td className="py-3 px-3 font-inter text-sm text-on-surface">
                        {c.name}
                      </td>
                      <td className="py-3 px-3 text-center font-jetbrains text-sm text-secondary">
                        {c.weight.toFixed(2)}
                      </td>
                      {alternatives.map((alt) => (
                        <td
                          key={alt.id}
                          className="py-2 px-2 text-center"
                          aria-label="Table name"
                        >
                          <input
                            type="number"
                            min="1"
                            max="5"
                            step="1"
                            value={alt.scores[c.id]}
                            onChange={(e) => {
                              const val = parseInt(e.target.value, 10);
                              if (val >= 1 && val <= 5) {
                                handleScoreChange(alt.id, c.id, val);
                              }
                            }}
                            className="w-12 h-8 text-center font-jetbrains text-sm text-on-surface bg-surface-container-high border border-outline-variant/30 rounded-lg
                              focus:border-primary focus:ring-1 focus:ring-primary/30 focus:outline-none
                              transition-colors cursor-text hover:border-primary/50"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="border-t-2 border-primary/30 bg-surface-container-high/30">
                    <td className="py-3 px-3 font-sora text-sm font-semibold text-on-surface">
                      Total Ponderado
                    </td>
                    <td className="py-3 px-3 text-center font-jetbrains text-sm text-primary font-medium">
                      {weightSum.toFixed(2)}
                    </td>
                    {totals.map((total, i) => (
                      <td
                        key={alternatives[i].id}
                        className={`py-3 px-3 text-center font-jetbrains text-sm font-bold ${
                          total === maxTotal
                            ? "text-primary"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {total.toFixed(2)}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Right: Results panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full lg:w-72 flex-shrink-0"
        >
          <div className="bg-surface-container-high border border-outline-variant/20 rounded-xl p-5">
            <h3 className="font-sora text-sm font-semibold text-on-surface mb-1">
              Resultado Final
            </h3>
            <p className="font-inter text-xs text-on-surface-variant mb-5">
              Puntuación ponderada por alternativa
            </p>

            <div className="flex flex-col gap-4">
              {alternatives.map((alt, i) => {
                const isWinner = i === winnerIdx;
                const barWidth = (totals[i] / 5) * 100;

                return (
                  <div key={alt.id}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`font-inter text-xs ${
                          isWinner
                            ? "text-primary font-medium"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {alt.name}
                      </span>
                      <motion.span
                        key={`${alt.id}-${totals[i].toFixed(3)}`}
                        initial={{ scale: 1.2, opacity: 0.7 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`font-jetbrains text-sm font-bold ${
                          isWinner ? "text-primary" : "text-on-surface-variant"
                        }`}
                      >
                        {totals[i].toFixed(2)}
                      </motion.span>
                    </div>
                    <div className="h-6 bg-surface-container rounded-md overflow-hidden relative">
                      <motion.div
                        className={`h-full rounded-md ${
                          isWinner
                            ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                            : "bg-outline-variant/40"
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${barWidth}%` }}
                        transition={{
                          delay: 0.7 + i * 0.2,
                          duration: 0.8,
                          ease: "easeOut"
                        }}
                      />
                      {isWinner && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5 }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 font-jetbrains text-[10px] text-white font-bold tracking-wider uppercase"
                        >
                          Ganadora
                        </motion.span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-outline-variant/20">
              <span className="font-jetbrains text-[10px] text-on-surface-variant tracking-widest uppercase block mb-1">
                Diferencia
              </span>
              <span className="font-jetbrains text-lg font-bold text-primary">
                {margin.toFixed(2)}
              </span>
              <span className="font-inter text-xs text-on-surface-variant ml-2">
                a favor de {alternatives[winnerIdx].name}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
