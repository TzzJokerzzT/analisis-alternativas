import { motion } from "motion/react";
import { Chip } from "@/components/ui/Chip";

const treeData = {
  goal: {
    label: "META",
    desc: "Pérdidas económicas disminuidas\nImagen de la empresa mejorada\nFrecuencia disminuida de lesiones y muertes",
    color: "primary"
  },
  purpose: {
    label: "PROPOSITO",
    desc: "Accidentalidad reducida de los automotores",
    color: "secondary"
  },
  components: [
    {
      label: "Componente 1",
      desc: "Sistema de mantenimiento preventivo implementado",
      color: "tertiary"
    },
    {
      label: "Componente 2",
      desc: "Programa de capacitación para conductores",
      color: "tertiary"
    },
    {
      label: "Componente 3",
      desc: "Monitoreo y control de la flota vehicular",
      color: "tertiary"
    }
  ],
  activities: [
    [
      "Diagnóstico del estado actual",
      "Diseño del plan de mantenimiento",
      "Selección de proveedor/equipo"
    ],
    [
      "Identificación de necesidades",
      "Diseño curricular",
      "Ejecución de talleres"
    ],
    ["Instalación de GPS", "Configuración de alertas", "Reportes periódicos"]
  ]
};

export function Slide01bArbol() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 md:px-16 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3"
      >
        <Chip color="secondary">Contexto</Chip>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sora text-2xl md:text-4xl font-bold text-on-surface text-center mb-2"
      >
        Árbol de Objetivos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="font-inter text-sm md:text-base text-on-surface-variant text-center max-w-2xl mb-8"
      >
        Ejemplo de la Metodología del Marco Lógico: cómo se estructuran los
        objetivos desde la meta hasta las actividades
      </motion.p>

      {/* Tree visualization */}
      <div className="w-full max-w-5xl flex flex-col items-center gap-0">
        {/* Goal (META) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-md"
        >
          <div className="bg-primary/15 border-2 border-primary/40 rounded-xl p-4 text-center">
            <span className="font-jetbrains text-[10px] text-primary tracking-widest uppercase block mb-1">
              {treeData.goal.label}
            </span>
            <p className="font-inter text-sm text-on-surface leading-relaxed whitespace-pre-line">
              {treeData.goal.desc}
            </p>
          </div>
        </motion.div>

        {/* Connector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-8 w-0.5 bg-outline-variant/40"
        />

        {/* Purpose (PROPÓSITO) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-secondary/15 border-2 border-secondary/40 rounded-xl p-4 text-center">
            <span className="font-jetbrains text-[10px] text-secondary tracking-widest uppercase block mb-1">
              {treeData.purpose.label}
            </span>
            <p className="font-inter text-sm text-on-surface leading-relaxed">
              {treeData.purpose.desc}
            </p>
          </div>
        </motion.div>

        {/* Connector to components */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative h-8 w-full"
        >
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-outline-variant/40 -translate-x-1/2" />
          <div className="absolute left-[16.67%] right-[16.67%] top-0 h-0.5 bg-outline-variant/40" />
          <div className="absolute left-[16.67%] top-0 w-0.5 h-full bg-outline-variant/40" />
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-outline-variant/40 -translate-x-1/2" />
          <div className="absolute right-[16.67%] top-0 w-0.5 h-full bg-outline-variant/40" />
        </motion.div>

        {/* Components */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {treeData.components.map((comp, i) => (
            <motion.div
              key={comp.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
            >
              <div className="bg-tertiary/15 border-2 border-tertiary/40 rounded-xl p-4 text-center h-25">
                <span className="font-jetbrains text-[10px] text-tertiary tracking-widest uppercase block mb-1">
                  {comp.label}
                </span>
                <p className="font-inter text-sm text-on-surface leading-relaxed">
                  {comp.desc}
                </p>
              </div>

              {/* Connector to activities */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="flex justify-center"
              >
                <div className="h-6 w-0.5 bg-outline-variant/40" />
              </motion.div>

              {/* Activities */}
              <div className="bg-surface-container-high border border-outline-variant/20 rounded-lg p-3">
                <span className="font-jetbrains text-[10px] text-on-surface-variant tracking-widest uppercase block mb-2">
                  Actividades
                </span>
                <ul className="space-y-1.5">
                  {treeData.activities[i].map((act) => (
                    <li
                      key={act}
                      className="flex items-start gap-2 font-inter text-xs text-on-surface-variant"
                    >
                      <span className="text-tertiary mt-0.5 flex-shrink-0">
                        ›
                      </span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-8 bg-secondary/10 border border-secondary/20 rounded-xl px-6 py-3 max-w-2xl"
      >
        <p className="font-inter text-sm text-on-surface-variant text-center">
          <span className="text-secondary font-medium">Nota:</span> El Árbol de
          Objetivos define QUÉ se quiere lograr. El{" "}
          <span className="text-primary font-medium">
            Análisis de Alternativas
          </span>{" "}
          define CÓMO se puede lograr, evaluando las mejores opciones para cada
          componente.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <span className="font-jetbrains text-xs text-on-surface-variant/50 tracking-widest">
          01 / 13
        </span>
      </motion.div>
    </div>
  );
}
