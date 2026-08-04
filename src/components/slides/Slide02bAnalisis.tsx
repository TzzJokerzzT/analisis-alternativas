import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Chip } from "@/components/ui/Chip";
import { Card } from "@/components/ui/Card";

interface AnalysisStep {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  icon: string;
  color: "primary" | "secondary" | "tertiary" | "error";
  modal: {
    explanation: string;
    keyQuestions: string[];
    example: {
      title: string;
      items: string[];
    };
    tip: string;
  };
}

const analysisSteps: AnalysisStep[] = [
  {
    id: "involucrados",
    num: "01",
    title: "Involucrados",
    shortDesc: "¿Quiénes son las partes interesadas del proyecto?",
    icon: "users",
    color: "primary",
    modal: {
      explanation:
        "Antes de definir el problema u objetivos, es fundamental identificar a todas las personas, grupos u organizaciones que tienen interés o influencia en el proyecto. Esto incluye beneficiarios directos, decisores, ejecutores y grupos afectados.",
      keyQuestions: [
        "¿Quiénes se benefician directamente con el proyecto?",
        "¿Quiénes toman las decisiones clave?",
        "¿Quiénes ejecutarán las actividades?",
        "¿Quiénes podrían oponerse o verse afectados negativamente?",
        "¿Qué nivel de influencia tiene cada grupo?"
      ],
      example: {
        title: "Caso: Empresa de Transporte",
        items: [
          "Directivos: toman decisiones estratégicas y aprueban inversiones",
          "Conductores: ejecutan las actividades y son beneficiarios directos",
          "Mecánicos: responsables del mantenimiento preventivo y correctivo",
          "Clientes: reciben el servicio y perciben la calidad",
          "Comunidad: se beneficia de menor accidentalidad vial",
          "Aseguradora: tiene interés en la reducción de siniestros"
        ]
      },
      tip: "Usa una matriz de poder-interés para priorizar: alto poder + alto interés = gestión cercana; bajo poder + alto interés = mantener informados."
    }
  },
  {
    id: "problema",
    num: "02",
    title: "Problema",
    shortDesc: "¿Cuál es la situación actual que necesitarse?",
    icon: "alert",
    color: "secondary",
    modal: {
      explanation:
        "Definir claramente el problema permite entender la brecha entre la situación actual y la deseada. Un buen diagnóstico del problema es la base para formular objetivos realistas y evaluar alternativas pertinentes.",
      keyQuestions: [
        "¿Cuál es la situación actual objetivable y medible?",
        "¿Cuál es la situación deseada o ideal?",
        "¿Cuál es la brecha entre ambas?",
        "¿Cuáles son las causas raíz del problema?",
        "¿Quiénes son los afectados y cómo se manifiesta?"
      ],
      example: {
        title: "Caso: Empresa de Transporte",
        items: [
          "Situación actual: 28 accidentes/año, costo de $180M COP anuales",
          "Situación deseada: Reducir accidentalidad en 60% en 3 años",
          "Causas: falta de mantenimiento preventivo, conductor fatigado, vehículo en mal estado",
          "Afectados: conductores (lesiones), empresa (costos), comunidad (seguridad vial)",
          "Indicador clave: frecuencia de accidentes por millón de kilómetros recorridos"
        ]
      },
      tip: "Evita confundir el problema con sus síntomas. 'Hay muchos accidentes' es un síntoma; 'El sistema de mantenimiento preventivo es inadecuado' es un problema mejor definido."
    }
  },
  {
    id: "objetivos",
    num: "03",
    title: "Objetivos",
    shortDesc: "¿Qué queremos lograr con el proyecto?",
    icon: "target",
    color: "tertiary",
    modal: {
      explanation:
        "Los objetivos traducen el problema en metas concretas, medibles y alcanzables. Deben formularse de forma SMART (específicos, medibles, alcanzables, relevantes, temporales) y estar alineados con la misión institucional.",
      keyQuestions: [
        "¿El objetivo es específico y claro?",
        "¿Se puede medir con indicadores concretos?",
        "¿Es alcanzable con los recursos disponibles?",
        "¿Es relevante para resolver el problema identificado?",
        "¿Tiene un plazo definido para su cumplimiento?"
      ],
      example: {
        title: "Caso: Empresa de Transporte",
        items: [
          "Objetivo general: Reducir la accidentalidad en un 60% durante los próximos 3 años",
          "Indicador: Frecuencia de accidentes por millón de km (de 2.8 a 1.12)",
          "Meta intermedia: 20% reducción en el primer año, 40% en el segundo, 60% en el tercero",
          "Supuesto: Se cuenta con presupuesto de $500M COP para inversión en el período",
          "Línea base: 28 accidentes en el último año evaluado"
        ]
      },
      tip: "Un objetivo bien formulado responde a: ¿QUÉ? (reducir accidentalidad) + ¿CUÁNTO? (60%) + ¿CUÁNDO? (3 años). Si falta alguno, el objetivo es ambiguo."
    }
  },
  {
    id: "alternativas",
    num: "04",
    title: "Alternativas",
    shortDesc: "¿Qué caminos tenemos para lograr los objetivos?",
    icon: "route",
    color: "error",
    modal: {
      explanation:
        "Las alternativas son las diferentes opciones o estrategias disponibles para alcanzar los objetivos planteadas. Cada alternativa debe ser viable, relevante y distinguible de las demás. No existe una sola forma correcta de resolver un problema.",
      keyQuestions: [
        "¿Cuáles son las opciones realistas para alcanzar el objetivo?",
        "¿Cada alternativa es técnicamente viable?",
        "¿Cada alternativa es económicamente factible?",
        "¿Existen alternativas que ya se han descartado y por qué?",
        "¿Se pueden combinar elementos de diferentes alternativas?"
      ],
      example: {
        title: "Caso: Empresa de Transporte",
        items: [
          "Alternativa 1: Mantenimiento tercerizado - contratar empresa especializada",
          "Alternativa 2: Mantenimiento propio - crear unidad interna con talleres propios",
          "Alternativa 3 (descartada): No hacer nada - asumir costos actuales (no resuelve el problema)",
          "Alternativa 4 (descartada): Reducir flota - disminuir operación (afecta negocio principal)",
          "Cada alternativa debe tener al menos 2 opciones reales para comparar"
        ]
      },
      tip: "Siempre presenta al menos 2 alternativas viables. Una sola opción no es un análisis, es una imposición. El análisis de alternativas busca informar la decisión, no justificar una opción predeterminada."
    }
  }
];

type ModalType = string | null;

function AnalisisModal({
  step,
  onClose
}: {
  step: AnalysisStep;
  onClose: () => void;
}) {
  const { modal } = step;

  const colorMap = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
    error: "text-error"
  };

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

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-10 h-10 rounded-xl bg-${step.color}/15 border border-${step.color}/20 flex items-center justify-center`}
              >
                <span
                  className={`font-jetbrains text-sm font-bold ${colorMap[step.color]}`}
                >
                  {step.num}
                </span>
              </div>
              <div>
                <Chip color={step.color}>{`Análisis ${step.num}`}</Chip>
              </div>
            </div>
            <h3 className="font-sora text-xl md:text-2xl font-bold text-on-surface mb-1">
              {step.title}
            </h3>
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

          {/* Example */}
          <div className="mb-6">
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
                    <span className="text-secondary mt-0.5 flex-shrink-0">
                      ›
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tip */}
          <div>
            <h4 className="font-jetbrains text-xs text-tertiary tracking-widest uppercase mb-3">
              Consejo
            </h4>
            <div className="bg-tertiary/10 border border-tertiary/20 rounded-lg p-4">
              <p className="font-inter text-sm text-on-surface-variant leading-relaxed italic">
                {`"${modal.tip}"`}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Slide02bAnalisis() {
  const [selected, setSelected] = useState<ModalType>(null);

  const selectedStep = analysisSteps.find((s) => s.id === selected);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3"
      >
        <Chip color="primary">Análisis Secuenciales</Chip>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sora text-2xl md:text-4xl font-bold text-on-surface text-center mb-2"
      >
        Los 4 Análisis Fundamentales
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="font-inter text-sm md:text-base text-on-surface-variant text-center max-w-2xl mb-8"
      >
        Antes de evaluar alternativas, debemos realizar estos 4 análisis en
        orden secuencial. Cada uno alimenta al siguiente.
      </motion.p>

      {/* Sequential flow */}
      <div className="w-full max-w-5xl">
        {/* Connection line */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 w-0.5 h-32 bg-outline-variant/30 -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {analysisSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="relative"
            >
              {/* Step number badge */}
              <div className="absolute -top-3 -left-3 z-10">
                <div
                  className={`w-8 h-8 rounded-full bg-${step.color} flex items-center justify-center shadow-lg`}
                >
                  <span className="font-jetbrains text-xs font-bold text-white">
                    {step.num}
                  </span>
                </div>
              </div>

              {/* Arrow between cards (desktop) */}
              {i < analysisSteps.length - 1 && i % 2 === 0 && (
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-outline-variant"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              {/* Arrow down (mobile) */}
              {i < analysisSteps.length - 1 && (
                <div className="md:hidden flex justify-center py-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-outline-variant rotate-90"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              <Card
                className="p-5 h-full cursor-pointer group hover:border-primary/40 transition-colors"
                onClick={() => setSelected(step.id)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-${step.color}/15 border border-${step.color}/20 flex items-center justify-center flex-shrink-0 group-hover:border-${step.color}/40 transition-colors`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-${step.color}`}
                    >
                      {step.icon === "users" && (
                        <>
                          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 00-3-3.87" />
                          <path d="M16 3.13a4 4 0 010 7.75" />
                        </>
                      )}
                      {step.icon === "alert" && (
                        <>
                          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                          <line x1="12" y1="9" x2="12" y2="13" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </>
                      )}
                      {step.icon === "target" && (
                        <>
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="6" />
                          <circle cx="12" cy="12" r="2" />
                        </>
                      )}
                      {step.icon === "route" && (
                        <>
                          <circle cx="6" cy="19" r="3" />
                          <path d="M9 19h8.5a3.5 3.5 0 000-7h-11a3.5 3.5 0 010-7H15" />
                          <circle cx="18" cy="5" r="3" />
                        </>
                      )}
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-sora text-lg font-semibold text-on-surface mb-1">
                      {step.title}
                    </h3>
                    <p className="font-inter text-sm text-on-surface-variant leading-relaxed mb-3">
                      {step.shortDesc}
                    </p>

                    {/* Click hint */}
                    <div className="flex items-center gap-1 text-on-surface-variant/50 group-hover:text-primary/70 transition-colors">
                      <span className="font-jetbrains text-[10px] tracking-wider uppercase">
                        Ver ejemplo
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
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 bg-primary/10 border border-primary/20 rounded-xl px-6 py-3 max-w-2xl"
      >
        <p className="font-inter text-sm text-on-surface-variant text-center">
          <span className="text-primary font-medium">Importante:</span> Estos
          análisis son secuenciales. El problema se define después de
          involucrados, los objetivos después del problema, y las alternativas
          después de los objetivos.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <span className="font-jetbrains text-xs text-on-surface-variant/50 tracking-widest">
          02 / 12
        </span>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStep && (
          <AnalisisModal
            step={selectedStep}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
