import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Chip } from "@/components/ui/Chip";
import { Card } from "@/components/ui/Card";
import type { Criteria, Alternative } from "@/data/matrixExample";

interface Slide08bSintesisProps {
  criteria: Criteria[];
  alternatives: Alternative[];
}

type ModalType = "winner" | "comparison" | "nextsteps" | null;

function StepItem({
  num,
  title,
  desc,
  color
}: {
  num: string;
  title: string;
  desc: string;
  color: "primary" | "secondary" | "error";
}) {
  const colorClasses = {
    primary: "bg-primary/10 border-primary/20 text-primary",
    secondary: "bg-secondary/10 border-secondary/20 text-secondary",
    error: "bg-error/10 border-error/20 text-error"
  };

  return (
    <div className="flex gap-3">
      <div
        className={`w-6 h-6 rounded-md border flex items-center justify-center flex-shrink-0 ${colorClasses[color]}`}
      >
        <span className="font-jetbrains text-[10px] font-bold">{num}</span>
      </div>
      <div>
        <h4 className="font-sora text-xs font-semibold text-on-surface mb-0.5">
          {title}
        </h4>
        <p className="font-inter text-[10px] text-on-surface-variant leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

export function Slide08bSintesis({
  criteria,
  alternatives
}: Slide08bSintesisProps) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const totals = useMemo(
    () =>
      alternatives.map((alt) =>
        criteria.reduce((sum, c) => sum + c.weight * alt.scores[c.id], 0)
      ),
    [criteria, alternatives]
  );

  const maxTotal = Math.max(...totals);
  const winnerIdx = totals.indexOf(maxTotal);
  const margin = maxTotal - Math.min(...totals);
  const winner = alternatives[winnerIdx];

  // Find strongest and weakest criteria for winner
  const winnerScores = useMemo(
    () =>
      criteria.map((c) => ({
        name: c.name,
        score: winner.scores[c.id],
        weighted: c.weight * winner.scores[c.id],
        weight: c.weight
      })),
    [criteria, winner]
  );

  const strongest = [...winnerScores].sort(
    (a, b) => b.weighted - a.weighted
  )[0];
  const weakest = [...winnerScores].sort((a, b) => a.weighted - b.weighted)[0];

  // Confidence level based on margin
  const confidence = margin >= 0.5 ? "alta" : margin >= 0.2 ? "media" : "baja";

  const confidenceColor =
    confidence === "alta"
      ? "text-primary"
      : confidence === "media"
        ? "text-secondary"
        : "text-error";

  // Risk analysis
  const riskLevel =
    margin < 0.1 ? "crítico" : margin < 0.3 ? "moderado" : "bajo";

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3"
      >
        <Chip color="primary">Síntesis de Resultados</Chip>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sora text-2xl md:text-4xl font-bold text-on-surface text-center mb-2"
      >
        Análisis y Recomendaciones
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="font-inter text-sm text-on-surface-variant text-center max-w-2xl mb-6"
      >
        Resultados de la evaluación ponderada y próximos pasos según el
        escenario obtenido
      </motion.p>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left: Winner Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-1 cursor-pointer group"
          onClick={() => setActiveModal("winner")}
        >
          <Card className="p-5 h-full border-primary/30 group-hover:border-primary/60 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-primary"
                >
                  <path
                    d="M8 1L10.2 5.4L15 6.2L11.5 9.6L12.4 14.4L8 12.1L3.6 14.4L4.5 9.6L1 6.2L5.8 5.4L8 1Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="font-sora text-sm font-semibold text-on-surface">
                Alternativa Ganadora
              </h3>
            </div>

            <div className="mb-4">
              <span className="font-sora text-lg font-bold text-primary block mb-1">
                {winner.name}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-jetbrains text-3xl font-bold text-primary">
                  {maxTotal.toFixed(2)}
                </span>
                <span className="font-inter text-xs text-on-surface-variant">
                  puntos
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="font-inter text-xs text-on-surface-variant">
                  Margen de victoria
                </span>
                <span className="font-jetbrains text-sm font-bold text-secondary">
                  +{margin.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-inter text-xs text-on-surface-variant">
                  Nivel de confianza
                </span>
                <span
                  className={`font-jetbrains text-sm font-bold ${confidenceColor}`}
                >
                  {confidence.charAt(0).toUpperCase() + confidence.slice(1)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-inter text-xs text-on-surface-variant">
                  Riesgo de decisión
                </span>
                <span
                  className={`font-jetbrains text-sm font-bold ${
                    riskLevel === "bajo"
                      ? "text-primary"
                      : riskLevel === "moderado"
                        ? "text-secondary"
                        : "text-error"
                  }`}
                >
                  {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}
                </span>
              </div>
            </div>

            {/* Strengths */}
            <div className="pt-3 border-t border-outline-variant/20">
              <h4 className="font-jetbrains text-[10px] text-primary tracking-widest uppercase mb-2">
                Fortaleza principal
              </h4>
              <p className="font-inter text-xs text-on-surface-variant">
                <span className="text-on-surface font-medium">
                  {strongest.name}
                </span>{" "}
                ({(strongest.weight * 100).toFixed(0)}% peso) con calificación{" "}
                {strongest.score}/5
              </p>
            </div>

            <div className="pt-3 border-t border-outline-variant/20">
              <h4 className="font-jetbrains text-[10px] text-secondary tracking-widest uppercase mb-2">
                Área de mejora
              </h4>
              <p className="font-inter text-xs text-on-surface-variant">
                <span className="text-on-surface font-medium">
                  {weakest.name}
                </span>{" "}
                ({(weakest.weight * 100).toFixed(0)}% peso) con calificación{" "}
                {weakest.score}/5
              </p>
            </div>

            {/* Click hint */}
            <div className="mt-4 flex items-center justify-center gap-1 text-on-surface-variant/50 group-hover:text-primary/70 transition-colors">
              <span className="font-jetbrains text-[10px] tracking-wider uppercase">
                Ver análisis detallado
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

        {/* Center: Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-1 cursor-pointer group"
          onClick={() => setActiveModal("comparison")}
        >
          <Card className="p-5 h-full group-hover:border-primary/40 transition-colors">
            <h3 className="font-sora text-sm font-semibold text-on-surface mb-4">
              Comparación Directa
            </h3>

            <div className="space-y-4">
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
                      <span
                        className={`font-jetbrains text-sm font-bold ${
                          isWinner ? "text-primary" : "text-on-surface-variant"
                        }`}
                      >
                        {totals[i].toFixed(2)}
                      </span>
                    </div>
                    <div className="h-4 bg-surface-container-high rounded-md overflow-hidden">
                      <motion.div
                        className={`h-full rounded-md ${
                          isWinner
                            ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                            : "bg-outline-variant/40"
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${barWidth}%` }}
                        transition={{
                          delay: 0.6 + i * 0.2,
                          duration: 0.8,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Criteria breakdown mini */}
            <div className="mt-5 pt-4 border-t border-outline-variant/20">
              <h4 className="font-jetbrains text-[10px] text-on-surface-variant tracking-widest uppercase mb-3">
                Desglose por criterio (ganadora)
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {winnerScores.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <span className="font-inter text-[10px] text-on-surface-variant truncate">
                      {item.name}
                    </span>
                    <span className="font-jetbrains text-[10px] text-on-surface-variant">
                      {item.score}/5
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Click hint */}
            <div className="mt-4 flex items-center justify-center gap-1 text-on-surface-variant/50 group-hover:text-primary/70 transition-colors">
              <span className="font-jetbrains text-[10px] tracking-wider uppercase">
                Ver comparación detallada
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

        {/* Right: Next Steps */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-1 cursor-pointer group"
          onClick={() => setActiveModal("nextsteps")}
        >
          <Card className="p-5 h-full group-hover:border-primary/40 transition-colors">
            <h3 className="font-sora text-sm font-semibold text-on-surface mb-4">
              Próximos Pasos
            </h3>

            <div className="space-y-3">
              {confidence === "alta" && (
                <>
                  <StepItem
                    num="1"
                    title="Validar con involucrados"
                    desc="Presentar resultados a las partes interesadas"
                    color="primary"
                  />
                  <StepItem
                    num="2"
                    title="Desarrollar plan de implementación"
                    desc="Crear cronograma y presupuesto"
                    color="primary"
                  />
                  <StepItem
                    num="3"
                    title="Definir indicadores"
                    desc="Establecer KPIs de seguimiento"
                    color="primary"
                  />
                </>
              )}

              {confidence === "media" && (
                <>
                  <StepItem
                    num="1"
                    title="Análisis de sensibilidad"
                    desc="Verificar cambios con variaciones"
                    color="secondary"
                  />
                  <StepItem
                    num="2"
                    title="Revisar calificaciones"
                    desc="Buscar información adicional"
                    color="secondary"
                  />
                  <StepItem
                    num="3"
                    title="Consultar expertos"
                    desc="Obtener segunda opinión"
                    color="secondary"
                  />
                </>
              )}

              {confidence === "baja" && (
                <>
                  <StepItem
                    num="1"
                    title="Revisar criterios y pesos"
                    desc="Reconsiderar importancia relativa"
                    color="error"
                  />
                  <StepItem
                    num="2"
                    title="Buscar datos adicionales"
                    desc="Información puede ser insuficiente"
                    color="error"
                  />
                  <StepItem
                    num="3"
                    title="Considerar alternativa híbrida"
                    desc="Combinar elementos de ambas"
                    color="error"
                  />
                </>
              )}
            </div>

            {/* Risk warning */}
            {riskLevel !== "bajo" && (
              <div className="mt-4 p-3 bg-secondary/10 border border-secondary/20 rounded-lg">
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  <span className="text-secondary font-medium">
                    Nota importante:
                  </span>{" "}
                  El margen de {margin.toFixed(2)} puntos indica que la decisión
                  podría cambiar.
                </p>
              </div>
            )}

            {/* Click hint */}
            <div className="mt-4 flex items-center justify-center gap-1 text-on-surface-variant/50 group-hover:text-primary/70 transition-colors">
              <span className="font-jetbrains text-[10px] tracking-wider uppercase">
                Ver pasos detallados
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
      </div>

      {/* Modals */}
      <AnimatePresence>
        {activeModal === "winner" && (
          <SintesisModal onClose={() => setActiveModal(null)}>
            <WinnerModalContent
              winner={winner}
              maxTotal={maxTotal}
              margin={margin}
              confidence={confidence}
              riskLevel={riskLevel}
              strongest={strongest}
              weakest={weakest}
              criteria={criteria}
              winnerScores={winnerScores}
            />
          </SintesisModal>
        )}

        {activeModal === "comparison" && (
          <SintesisModal onClose={() => setActiveModal(null)}>
            <ComparisonModalContent
              alternatives={alternatives}
              totals={totals}
              winnerIdx={winnerIdx}
              criteria={criteria}
            />
          </SintesisModal>
        )}

        {activeModal === "nextsteps" && (
          <SintesisModal onClose={() => setActiveModal(null)}>
            <NextStepsModalContent
              confidence={confidence}
              riskLevel={riskLevel}
              margin={margin}
            />
          </SintesisModal>
        )}
      </AnimatePresence>
    </div>
  );
}

// Modal wrapper
function SintesisModal({
  onClose,
  children
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] bg-surface-container border border-outline-variant/30 rounded-2xl overflow-y-auto shadow-2xl"
      >
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
        <div className="p-6 md:p-8">{children}</div>
      </motion.div>
    </motion.div>
  );
}

// Winner Modal Content
function WinnerModalContent({
  winner,
  maxTotal,
  margin,
  confidence,
  riskLevel,
  strongest,
  weakest,
  criteria,
  winnerScores
}: {
  winner: Alternative;
  maxTotal: number;
  margin: number;
  confidence: string;
  riskLevel: string;
  strongest: { name: string; score: number; weighted: number; weight: number };
  weakest: { name: string; score: number; weighted: number; weight: number };
  criteria: Criteria[];
  winnerScores: {
    name: string;
    score: number;
    weighted: number;
    weight: number;
  }[];
}) {
  return (
    <>
      <div className="mb-6">
        <Chip color="primary">Análisis Detallado</Chip>
        <h3 className="font-sora text-xl md:text-2xl font-bold text-on-surface mt-3 mb-1">
          Alternativa Ganadora
        </h3>
        <p className="font-sora text-sm text-primary font-medium">
          {winner.name}
        </p>
      </div>

      {/* Score summary */}
      <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="font-jetbrains text-4xl font-bold text-primary">
            {maxTotal.toFixed(2)}
          </span>
          <span className="font-inter text-sm text-on-surface-variant">
            puntos totales
          </span>
        </div>
        <p className="font-inter text-xs text-on-surface-variant">
          Puntuación obtenida tras aplicar los pesos de cada criterio
        </p>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-surface-container-high border border-outline-variant/20 rounded-lg p-3">
          <span className="font-jetbrains text-[10px] text-on-surface-variant tracking-wider uppercase block mb-1">
            Margen
          </span>
          <span className="font-jetbrains text-lg font-bold text-secondary">
            +{margin.toFixed(2)}
          </span>
        </div>
        <div className="bg-surface-container-high border border-outline-variant/20 rounded-lg p-3">
          <span className="font-jetbrains text-[10px] text-on-surface-variant tracking-wider uppercase block mb-1">
            Confianza
          </span>
          <span
            className={`font-jetbrains text-lg font-bold ${
              confidence === "alta"
                ? "text-primary"
                : confidence === "media"
                  ? "text-secondary"
                  : "text-error"
            }`}
          >
            {confidence.charAt(0).toUpperCase() + confidence.slice(1)}
          </span>
        </div>
        <div className="bg-surface-container-high border border-outline-variant/20 rounded-lg p-3">
          <span className="font-jetbrains text-[10px] text-on-surface-variant tracking-wider uppercase block mb-1">
            Riesgo
          </span>
          <span
            className={`font-jetbrains text-lg font-bold ${
              riskLevel === "bajo"
                ? "text-primary"
                : riskLevel === "moderado"
                  ? "text-secondary"
                  : "text-error"
            }`}
          >
            {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}
          </span>
        </div>
        <div className="bg-surface-container-high border border-outline-variant/20 rounded-lg p-3">
          <span className="font-jetbrains text-[10px] text-on-surface-variant tracking-wider uppercase block mb-1">
            Criterios evaluados
          </span>
          <span className="font-jetbrains text-lg font-bold text-on-surface">
            {criteria.length}
          </span>
        </div>
      </div>

      {/* Analysis */}
      <div className="mb-6">
        <h4 className="font-jetbrains text-xs text-primary tracking-widest uppercase mb-3">
          Interpretación del resultado
        </h4>
        <div className="bg-surface-container-low border border-outline-variant/20 rounded-lg p-4 space-y-3">
          <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
            La alternativa{" "}
            <span className="text-on-surface font-medium">{winner.name}</span>{" "}
            obtuvo la puntuación más alta con{" "}
            <span className="text-primary font-medium">
              {maxTotal.toFixed(2)}
            </span>{" "}
            puntos, superando por{" "}
            <span className="text-secondary font-medium">
              +{margin.toFixed(2)}
            </span>{" "}
            a la alternativa {confidence === "alta" ? "competidora" : "opuesta"}
            .
          </p>
          <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
            {confidence === "alta" &&
              "El margen amplio indica una preferencia clara. La decisión es robusta y puede avanzar con confianza hacia la implementación."}
            {confidence === "media" &&
              "El margen moderado sugiere una preferencia razonable, pero se recomienda validar con análisis de sensibilidad antes de decidir."}
            {confidence === "baja" &&
              "El margen estrecho indica que ambas alternativas son competitivas. Se requiere análisis adicional para asegurar la decisión."}
          </p>
        </div>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="mb-6">
        <h4 className="font-jetbrains text-xs text-primary tracking-widest uppercase mb-3">
          Fortalezas y áreas de mejora
        </h4>
        <div className="space-y-3">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-primary"
              >
                <path
                  d="M8 1L10.2 5.4L15 6.2L11.5 9.6L12.4 14.4L8 12.1L3.6 14.4L4.5 9.6L1 6.2L5.8 5.4L8 1Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-sora text-sm font-semibold text-on-surface">
                Mayor fortaleza
              </span>
            </div>
            <p className="font-inter text-sm text-on-surface-variant">
              <span className="text-on-surface font-medium">
                {strongest.name}
              </span>{" "}
              con calificación{" "}
              <span className="text-primary font-medium">
                {strongest.score}/5
              </span>{" "}
              y peso de {(strongest.weight * 100).toFixed(0)}%, aportando{" "}
              <span className="text-primary font-medium">
                {strongest.weighted.toFixed(2)}
              </span>{" "}
              puntos al total.
            </p>
          </div>
          <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-secondary"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M8 5v4M8 11v.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-sora text-sm font-semibold text-on-surface">
                Área de mejora
              </span>
            </div>
            <p className="font-inter text-sm text-on-surface-variant">
              <span className="text-on-surface font-medium">
                {weakest.name}
              </span>{" "}
              con calificación{" "}
              <span className="text-secondary font-medium">
                {weakest.score}/5
              </span>{" "}
              y peso de {(weakest.weight * 100).toFixed(0)}%, aportando solo{" "}
              <span className="text-secondary font-medium">
                {weakest.weighted.toFixed(2)}
              </span>{" "}
              puntos.
              {weakest.score <= 3 &&
                " Esta área podría fortalecerse para mejorar aún más el resultado."}
            </p>
          </div>
        </div>
      </div>

      {/* Full breakdown */}
      <div>
        <h4 className="font-jetbrains text-xs text-primary tracking-widest uppercase mb-3">
          Desglose completo por criterio
        </h4>
        <div className="space-y-2">
          {winnerScores
            .sort((a, b) => b.weighted - a.weighted)
            .map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between bg-surface-container-high border border-outline-variant/10 rounded-lg p-3"
              >
                <div className="flex-1">
                  <span className="font-inter text-sm text-on-surface block">
                    {item.name}
                  </span>
                  <span className="font-inter text-[10px] text-on-surface-variant">
                    Peso: {(item.weight * 100).toFixed(0)}% × Calificación:{" "}
                    {item.score}/5
                  </span>
                </div>
                <span className="font-jetbrains text-sm font-bold text-primary">
                  {item.weighted.toFixed(2)}
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

// Comparison Modal Content
function ComparisonModalContent({
  alternatives,
  totals,
  winnerIdx,
  criteria
}: {
  alternatives: Alternative[];
  totals: number[];
  winnerIdx: number;
  criteria: Criteria[];
}) {
  return (
    <>
      <div className="mb-6">
        <Chip color="secondary">Comparación Detallada</Chip>
        <h3 className="font-sora text-xl md:text-2xl font-bold text-on-surface mt-3 mb-1">
          Comparación Lado a Lado
        </h3>
        <p className="font-inter text-sm text-on-surface-variant">
          Análisis detallado de cada alternativa por criterio
        </p>
      </div>

      {/* Alternatives comparison */}
      {alternatives.map((alt, i) => {
        const isWinner = i === winnerIdx;
        const barWidth = (totals[i] / 5) * 100;

        return (
          <div
            key={alt.id}
            className={`mb-6 p-4 rounded-xl border ${
              isWinner
                ? "bg-primary/5 border-primary/30"
                : "bg-surface-container-high border-outline-variant/20"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h4
                className={`font-sora text-sm font-semibold ${
                  isWinner ? "text-primary" : "text-on-surface"
                }`}
              >
                {alt.name}
              </h4>
              <span
                className={`font-jetbrains text-lg font-bold ${
                  isWinner ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                {totals[i].toFixed(2)}
              </span>
            </div>

            {/* Bar */}
            <div className="h-3 bg-surface-container rounded-md overflow-hidden mb-4">
              <motion.div
                className={`h-full rounded-md ${
                  isWinner
                    ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                    : "bg-outline-variant/40"
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${barWidth}%` }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Criteria scores */}
            <div className="space-y-2">
              {criteria.map((c) => {
                const score = alt.scores[c.id];
                const weighted = c.weight * score;
                return (
                  <div key={c.id} className="flex items-center gap-3">
                    <span className="font-inter text-xs text-on-surface-variant w-28 truncate">
                      {c.name}
                    </span>
                    <div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary/60 rounded-full"
                        style={{ width: `${(score / 5) * 100}%` }}
                      />
                    </div>
                    <span className="font-jetbrains text-[10px] text-on-surface-variant w-12 text-right">
                      {score}/5
                    </span>
                    <span className="font-jetbrains text-[10px] text-primary w-10 text-right">
                      {weighted.toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Winner summary */}
      <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
        <h4 className="font-sora text-sm font-semibold text-on-surface mb-2">
          Conclusión
        </h4>
        <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
          <span className="text-primary font-medium">
            {alternatives[winnerIdx].name}
          </span>{" "}
          supera por{" "}
          <span className="text-secondary font-medium">
            +{(totals[winnerIdx] - totals[1 - winnerIdx]).toFixed(2)}
          </span>{" "}
          puntos. La diferencia se genera principalmente en los criterios con
          mayor peso asignado.
        </p>
      </div>
    </>
  );
}

// Next Steps Modal Content
function NextStepsModalContent({
  confidence,
  riskLevel,
  margin
}: {
  confidence: string;
  riskLevel: string;
  margin: number;
}) {
  const steps = {
    alta: [
      {
        num: "1",
        title: "Validar con involucrados",
        desc: "Presentar los resultados del análisis a las partes interesadas (directivos, personal operativo, sindicato si aplica) para obtener validación y buy-in antes de avanzar.",
        details:
          "Incluye una presentación ejecutiva con la matriz de decisión, el margen de victoria y las razones clave por las que esta alternativa fue seleccionada."
      },
      {
        num: "2",
        title: "Desarrollar plan de implementación",
        desc: "Crear un plan detallado que incluya cronograma, presupuesto, asignación de recursos y hitos de seguimiento.",
        details:
          "El plan debe contemplar: fase de preparación (mes 1-2), implementación piloto (mes 3-4), escalamiento (mes 5-12) y evaluación de resultados."
      },
      {
        num: "3",
        title: "Definir indicadores de seguimiento",
        desc: "Establecer KPIs claros para monitorear el progreso y medir el impacto de la alternativa implementada.",
        details:
          "KPIs sugeridos: reducción de accidentalidad (%), costo por vehículo mantenido, tiempo promedio de retorno, satisfacción del personal."
      }
    ],
    media: [
      {
        num: "1",
        title: "Realizar análisis de sensibilidad",
        desc: "Variar los pesos de los criterios para verificar si el resultado se mantiene estable ante diferentes escenarios.",
        details:
          "Probar con: pesos originales, escenario conservador (mayor peso a economía), escenario agresivo (mayor peso a técnica) y escenario social (mayor peso a impacto social)."
      },
      {
        num: "2",
        title: "Revisar calificaciones con datos frescos",
        desc: "Buscar información adicional para afinar las puntuaciones, especialmente en criterios donde la diferencia es pequeña.",
        details:
          "Solicitar cotizaciones actualizadas, consultar con expertos en mantenimiento vehicular, revisar casos de éxito de empresas similares."
      },
      {
        num: "3",
        title: "Consultar expertos externos",
        desc: "Obtener una segunda opinión de consultores especializados en gestión de flotas o mantenimiento industrial.",
        details:
          "Un experto puede validar o cuestionar las suposiciones detrás de las calificaciones, especialmente en criterios técnicos e institucionales."
      }
    ],
    baja: [
      {
        num: "1",
        title: "Revisar criterios y pesos fundamentalmente",
        desc: "Con un margen tan estrecho, es posible que los criterios no estén capturando adecuadamente las diferencias reales.",
        details:
          "Considerar: ¿Hay criterios faltantes? ¿Los pesos reflejan realmente las prioridades del proyecto? ¿Se podrían agregar subcriterios para mayor precisión?"
      },
      {
        num: "2",
        title: "Buscar datos primarios adicionales",
        desc: "La información actual puede ser insuficiente o estar basada en suposiciones que necesitan verificación.",
        details:
          "Realizar: encuestas a personal operativo, análisis de costos reales de proveedores, benchmarking con empresas del sector, estudio de factibilidad técnica."
      },
      {
        num: "3",
        title: "Explorar alternativa híbrida",
        desc: "Combinar elementos de ambas opciones puede generar una solución que capture lo mejor de cada una.",
        details:
          "Ejemplo: implementar mantenimiento propio para vehicles críticos y tercerizar el preventivo básico. Esto reduce riesgo y mantiene flexibilidad."
      }
    ]
  };

  const currentSteps = steps[confidence as keyof typeof steps];

  return (
    <>
      <div className="mb-6">
        <Chip
          color={
            confidence === "alta"
              ? "primary"
              : confidence === "media"
                ? "secondary"
                : "tertiary"
          }
        >
          Próximos Pasos
        </Chip>
        <h3 className="font-sora text-xl md:text-2xl font-bold text-on-surface mt-3 mb-1">
          Plan de Acción según Confianza{" "}
          {confidence.charAt(0).toUpperCase() + confidence.slice(1)}
        </h3>
        <p className="font-inter text-sm text-on-surface-variant">
          Recomendaciones basadas en el nivel de confianza del resultado
        </p>
      </div>

      {/* Context */}
      <div className="bg-surface-container-high border border-outline-variant/20 rounded-xl p-4 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <span className="font-jetbrains text-[10px] text-on-surface-variant tracking-wider uppercase block mb-1">
              Confianza
            </span>
            <span
              className={`font-jetbrains text-sm font-bold ${
                confidence === "alta"
                  ? "text-primary"
                  : confidence === "media"
                    ? "text-secondary"
                    : "text-error"
              }`}
            >
              {confidence.charAt(0).toUpperCase() + confidence.slice(1)}
            </span>
          </div>
          <div className="text-center">
            <span className="font-jetbrains text-[10px] text-on-surface-variant tracking-wider uppercase block mb-1">
              Margen
            </span>
            <span className="font-jetbrains text-sm font-bold text-secondary">
              +{margin.toFixed(2)}
            </span>
          </div>
          <div className="text-center">
            <span className="font-jetbrains text-[10px] text-on-surface-variant tracking-wider uppercase block mb-1">
              Riesgo
            </span>
            <span
              className={`font-jetbrains text-sm font-bold ${
                riskLevel === "bajo"
                  ? "text-primary"
                  : riskLevel === "moderado"
                    ? "text-secondary"
                    : "text-error"
              }`}
            >
              {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}
            </span>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {currentSteps.map((step) => (
          <div
            key={step.num}
            className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-4"
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  confidence === "alta"
                    ? "bg-primary/20 text-primary"
                    : confidence === "media"
                      ? "bg-secondary/20 text-secondary"
                      : "bg-error/20 text-error"
                }`}
              >
                <span className="font-jetbrains text-sm font-bold">
                  {step.num}
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-sora text-sm font-semibold text-on-surface mb-1">
                  {step.title}
                </h4>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed mb-2">
                  {step.desc}
                </p>
                <div className="bg-surface-container border border-outline-variant/10 rounded-lg p-3">
                  <span className="font-jetbrains text-[10px] text-on-surface-variant tracking-wider uppercase block mb-1">
                    Detalle de implementación
                  </span>
                  <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Risk warning */}
      {riskLevel !== "bajo" && (
        <div className="mt-6 p-4 bg-secondary/10 border border-secondary/20 rounded-xl">
          <div className="flex items-start gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-secondary flex-shrink-0 mt-0.5"
            >
              <path
                d="M10 2L18 17H2L10 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M10 8v4M10 14v.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <div>
              <h4 className="font-sora text-sm font-semibold text-on-surface mb-1">
                Advertencia de Riesgo
              </h4>
              <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                Con un margen de{" "}
                <span className="text-secondary font-medium">
                  +{margin.toFixed(2)}
                </span>{" "}
                puntos, la decisión es sensible a cambios en los supuestos. Se
                recomienda encarecidamente completar al menos los pasos 1 y 2
                antes de comprometer recursos significativos.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Timeline suggestion */}
      <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
        <h4 className="font-sora text-sm font-semibold text-on-surface mb-3">
          Cronograma Sugerido
        </h4>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-jetbrains text-[10px] text-on-surface-variant w-20">
              Semana 1-2
            </span>
            <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-primary/60 rounded-full w-full" />
            </div>
            <span className="font-inter text-[10px] text-on-surface-variant w-32">
              {currentSteps[0].title}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-jetbrains text-[10px] text-on-surface-variant w-20">
              Semana 3-4
            </span>
            <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-secondary/60 rounded-full w-full" />
            </div>
            <span className="font-inter text-[10px] text-on-surface-variant w-32">
              {currentSteps[1].title}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-jetbrains text-[10px] text-on-surface-variant w-20">
              Semana 5-6
            </span>
            <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-tertiary/60 rounded-full w-full" />
            </div>
            <span className="font-inter text-[10px] text-on-surface-variant w-32">
              {currentSteps[2].title}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
