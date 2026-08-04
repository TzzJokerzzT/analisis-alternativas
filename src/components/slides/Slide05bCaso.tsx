import { motion } from "motion/react";
import { Chip } from "@/components/ui/Chip";
import { Card } from "@/components/ui/Card";

const caseData = {
  company: "Empresa de Transporte",
  problem: "Alta accidentalidad en flota vehicular",
  context:
    "Una empresa de transporte terrestre de carga presenta niveles críticos de accidentalidad que generan pérdidas económicas significativas, daños a la imagen corporativa y riesgos para la seguridad vial.",
  stats: [
    { label: "Flota activa", value: "45 vehículos" },
    { label: "Accidentes / año", value: "28 eventos" },
    { label: "Costo anual", value: "$180M COP" },
    { label: "Días perdidos", value: "320 días" }
  ],
  alternatives: [
    {
      id: "alt1",
      name: "Alternativa 1: Mantenimiento Tercerizado",
      desc: "Contratar una empresa especializada que asuma la gestión integral del mantenimiento preventivo y correctivo de la flota.",
      pros: [
        "Menor inversión inicial",
        "Acceso a conocimiento especializado",
        "Flexibilidad de escala"
      ],
      cons: [
        "Dependencia del proveedor",
        "Menor control sobre la calidad",
        "Costos recurrentes altos"
      ]
    },
    {
      id: "alt2",
      name: "Alternativa 2: Mantenimiento Propio",
      desc: "Crear una unidad interna de mantenimiento con personal propio, talleres y herramientas dedicadas exclusivamente a la flota.",
      pros: [
        "Control total sobre la calidad",
        "Generación de empleo directo",
        "Conocimiento institucional acumulado"
      ],
      cons: [
        "Mayor inversión inicial",
        "Requiere infraestructura propia",
        "Necesita capacitación continua"
      ]
    }
  ],
  objective: "Reducir la accidentalidad en un 60% durante los próximos 3 años"
};

export function Slide05bCaso() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3"
      >
        <Chip color="primary">Caso Práctico</Chip>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sora text-2xl md:text-4xl font-bold text-on-surface text-center mb-2"
      >
        {caseData.company}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="font-inter text-sm md:text-base text-on-surface-variant text-center max-w-2xl mb-6"
      >
        {caseData.context}
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl mb-6"
      >
        {caseData.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.1 }}
            className="bg-surface-container border border-outline-variant/20 rounded-lg p-3 text-center"
          >
            <span className="font-jetbrains text-xs text-on-surface-variant tracking-wider uppercase block mb-1">
              {stat.label}
            </span>
            <span className="font-sora text-lg font-bold text-primary">
              {stat.value}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Alternatives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {caseData.alternatives.map((alt, i) => (
          <motion.div
            key={alt.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.15 }}
          >
            <Card className="p-5 h-full flex flex-col">
              <h3 className="font-sora text-sm font-semibold text-on-surface mb-2">
                {alt.name}
              </h3>
              <p className="font-inter text-xs text-on-surface-variant leading-relaxed mb-4">
                {alt.desc}
              </p>

              <div className="flex-1">
                <h4 className="font-jetbrains text-[10px] text-primary tracking-widest uppercase mb-2">
                  Ventajas
                </h4>
                <ul className="flex flex-col gap-1 mb-3">
                  {alt.pros.map((pro) => (
                    <li
                      key={pro}
                      className="flex items-start gap-1.5 font-inter text-xs text-on-surface-variant"
                    >
                      <span className="text-primary mt-0.5 flex-shrink-0">
                        +
                      </span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-jetbrains text-[10px] text-secondary tracking-widest uppercase mb-2">
                  Desventajas
                </h4>
                <ul className="flex flex-col gap-1">
                  {alt.cons.map((con) => (
                    <li
                      key={con}
                      className="flex items-start gap-1.5 font-inter text-xs text-on-surface-variant"
                    >
                      <span className="text-secondary mt-0.5 flex-shrink-0">
                        -
                      </span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Objective */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-6 bg-primary/10 border border-primary/20 rounded-xl px-6 py-3"
      >
        <span className="font-jetbrains text-xs text-primary tracking-widest uppercase mr-2">
          Objetivo:
        </span>
        <span className="font-inter text-sm text-on-surface">
          {caseData.objective}
        </span>
      </motion.div>
    </div>
  );
}
