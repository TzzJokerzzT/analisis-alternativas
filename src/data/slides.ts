export interface SlideData {
  id: number;
  slug: string;
  label: string;
  title: string;
}

export const slides: SlideData[] = [
  {
    id: 1,
    slug: "slide-1",
    label: "Portada",
    title: "Análisis de Alternativas"
  },
  {
    id: 2,
    slug: "slide-2",
    label: "Árbol",
    title: "Árbol de Objetivos"
  },
  {
    id: 3,
    slug: "slide-3",
    label: "Ubicación",
    title: "Ubicación en el Ciclo del Marco Lógico"
  },
  {
    id: 4,
    slug: "slide-4",
    label: "Análisis",
    title: "Los 4 Análisis Fundamentales"
  },
  {
    id: 5,
    slug: "slide-5",
    label: "Preguntas",
    title: "Preguntas Clave"
  },
  {
    id: 6,
    slug: "slide-6",
    label: "Pasos",
    title: "Pasos del Proceso de Análisis"
  },
  {
    id: 7,
    slug: "slide-7",
    label: "Criterios",
    title: "Criterios de Evaluación"
  },
  {
    id: 8,
    slug: "slide-8",
    label: "Caso",
    title: "Caso Práctico"
  },
  {
    id: 9,
    slug: "slide-9",
    label: "Tabla",
    title: "Cómo Funciona la Tabla"
  },
  { id: 10, slug: "slide-10", label: "Matriz", title: "Matriz Ponderada" },
  {
    id: 11,
    slug: "slide-11",
    label: "Síntesis",
    title: "Síntesis de Resultados"
  },
  {
    id: 12,
    slug: "slide-12",
    label: "EAP",
    title: "Estructura Analítica del Proyecto"
  },
  {
    id: 13,
    slug: "slide-13",
    label: "Errores",
    title: "Errores Frecuentes en la Práctica"
  },
  { id: 14, slug: "slide-14", label: "Cierre", title: "Cierre" }
];

export const stepperStages = [
  { num: "01", label: "Involucrados" },
  { num: "02", label: "Problema" },
  { num: "03", label: "Objetivos" },
  { num: "04", label: "Alternativas" },
  { num: "05", label: "EAP" },
  { num: "06", label: "Matriz" }
];

export const processSteps = [
  {
    num: "01",
    title: "Identificar acciones por medio",
    desc: "Listar todas las acciones posibles que podrían resolver el problema identificado, explorando diferentes enfoques y estrategias."
  },
  {
    num: "02",
    title: "Agrupar en alternativas",
    desc: "Organizar las acciones en grupos coherentes que formen estrategias completas y viables para el proyecto."
  },
  {
    num: "03",
    title: "Definir criterios y pesos",
    desc: "Establecer los criterios de evaluación (técnicos, económicos, sociales, etc.) y asignar pesos según su importancia relativa."
  },
  {
    num: "04",
    title: "Construir matriz comparativa",
    desc: "Evaluar cada alternativa contra los criterios definidos asignando valores numéricos de 1 a 5 para cuantificar su desempeño."
  },
  {
    num: "05",
    title: "Seleccionar alternativa óptima",
    desc: "Calcular puntuaciones ponderadas y seleccionar la alternativa con mayor valor total como la más conveniente."
  }
];

export interface KeyQuestion {
  phase: string;
  question: string;
  desc: string;
  progress: number;
  active: boolean;
  modal: {
    subtitle: string;
    explanation: string;
    methodologies: { name: string; desc: string }[];
    example: { title: string; items: string[] };
  };
}

export const keyQuestions: KeyQuestion[] = [
  {
    phase: "Fase 01",
    question: "¿Qué caminos existen?",
    desc: "Identificación de todas las alternativas posibles para abordar el problema.",
    progress: 33,
    active: false,
    modal: {
      subtitle: "Identificación de Alternativas",
      explanation:
        "Se parte del árbol de objetivos para identificar todas las acciones posibles que podrían resolver el problema central. Cada 'medio' del árbol puede generar múltiples acciones concretas. La clave es ser exhaustivo: no descartar opciones prematuramente.",
      methodologies: [
        {
          name: "Análisis de medios-fines",
          desc: "Recorrer cada nodo del árbol de objetivos y listar acciones concretas para cada medio identificado."
        },
        {
          name: "Brainstorming estructurado",
          desc: "Sesiones grupales con técnicas como lluvia de ideas, Delphi o World Café para generar opciones."
        },
        {
          name: "Análisis comparado",
          desc: "Revisar experiencias de proyectos similares en otras organizaciones o países para identificar caminos probados."
        },
        {
          name: "Matriz de doble entrada",
          desc: "Cruzar problemas con posibles soluciones para确保 que cada problema tenga al menos una alternativa."
        }
      ],
      example: {
        title: "Caso: Empresa de transporte con alta accidentalidad",
        items: [
          "Medio: Prudencia de conductores → Acciones: Contratar nuevos conductores, Capacitación en manejo seguro",
          "Medio: Vehículos en buen estado → Acciones: Compra de vehículos nuevos, Reparación de existentes",
          "Medio: Buen mantenimiento → Acciones: Mantenimiento tercerizado, Unidad interna de mantenimiento"
        ]
      }
    }
  },
  {
    phase: "Fase 02",
    question: "¿Con qué criterios los comparamos?",
    desc: "Definición de criterios de evaluación y asignación de pesos relativos.",
    progress: 66,
    active: true,
    modal: {
      subtitle: "Definición de Criterios y Pesos",
      explanation:
        "Los criterios permiten comparar las alternativas de forma objetiva. Deben ser relevantes, medibles y completos. El peso refleja la importancia relativa de cada criterio para los decisores. Es fundamental justificar los pesos para evitar sesgos.",
      methodologies: [
        {
          name: "Análisis jerárquico (AHP)",
          desc: "Comparación por pares de criterios para derivar pesos de forma consistente, reduciendo la subjetividad."
        },
        {
          name: "Método Delphi",
          desc: "Consulta iterativa a expertos para alcanzar consenso sobre la importancia relativa de cada criterio."
        },
        {
          name: "Conferencia de consenso",
          desc: "Reunión de actores clave para debatir y acordar los pesos de forma participativa."
        },
        {
          name: "Ponderación por datos",
          desc: "Usar datos históricos o presupuestarios para asignar pesos basados en evidencia (ej: % del presupuesto)."
        }
      ],
      example: {
        title: "Criterios típicos y sus pesos",
        items: [
          "Técnica (20%): Calidad del proceso, control sobre la ejecución, tecnología disponible",
          "Económica (30%): Costo de inversión y operación, relación beneficio-costo",
          "Social (10%): Generación de empleo, aceptación de la comunidad, equidad",
          "Ambiental (10%): Huella adicional de instalaciones u operación",
          "Institucional (15%): Capacidad de gestión, marco normativo, trámites requeridos",
          "Sustentabilidad (15%): Permanencia del resultado en el tiempo"
        ]
      }
    }
  },
  {
    phase: "Fase 03",
    question: "¿Cuál conviene ejecutar?",
    desc: "Selección de la alternativa más conveniente mediante análisis ponderado.",
    progress: 100,
    active: false,
    modal: {
      subtitle: "Selección de la Alternativa Óptima",
      explanation:
        "Se construye una matriz comparativa donde cada alternativa se evalúa contra los criterios ponderados. La alternativa con mayor puntuación total es la recomendada. Pero no basta con el número: hay que justificar por qué se descartaron las demás y documentar el trade-off.",
      methodologies: [
        {
          name: "Matriz ponderada (multicriterio)",
          desc: "Multiplicar el puntaje de cada alternativa por el peso del criterio y sumar para obtener el total."
        },
        {
          name: "Análisis de sensibilidad",
          desc: "Variar los pesos para ver si cambia la alternativa ganadora. Si no cambia, la decisión es robusta."
        },
        {
          name: "Costo-beneficio simple",
          desc: "Para decisiones binarias, comparar directamente costo total vs beneficios esperados de cada opción."
        },
        {
          name: "Matriz de decisión con votación",
          desc: "Cada integrante del equipo vota y se promedian los puntajes para reducir el sesgo individual."
        }
      ],
      example: {
        title: "Resultado del caso de transporte",
        items: [
          "Alternativa 1 (Tercerizado): Puntuación total = 3.55 — Menor inversión inicial, pero dependencia externa",
          "Alternativa 2 (Propio): Puntuación total = 3.60 — Mayor inversión, pero control total y sustentabilidad",
          "Decisión: Alternativa 2 gana por 0.05 puntos, impulsada por mejor sustentabilidad e impacto social",
          "Justificación: El trade-off inversion vs control vale la pena para un servicio crítico como el transporte"
        ]
      }
    }
  }
];

export interface CriteriaItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  modal: {
    explanation: string;
    keyQuestions: string[];
    tips: string;
    example: string;
  };
}

export const criteriaItems: CriteriaItem[] = [
  {
    id: "tecnica",
    name: "Técnica",
    icon: "cog",
    description:
      "Calidad del proceso, control sobre la ejecución, tecnología disponible",
    modal: {
      explanation:
        "Evalúa si la alternativa es factible desde el punto de vista ingenieril o de procesos. Considera la complejidad técnica, los recursos necesarios, el control que tendrá la organización sobre la ejecución y si la tecnología es probada o experimental.",
      keyQuestions: [
        "¿Tenemos el conocimiento técnico para ejecutarla?",
        "¿La tecnología está probada en contextos similares?",
        "¿Qué nivel de control tenemos sobre la calidad del resultado?",
        "¿Cuál es la complejidad técnica de implementación?"
      ],
      tips: "No confundir 'lo más avanzado' con 'lo más adecuado'. A veces una solución simple y probada es mejor que una innovadora pero riesgosa.",
      example:
        "En el caso del transporte: Mantenimiento propio da mayor control técnico (calificación 5), pero requiere capacitar personal. Tercerizado depende de la calidad del proveedor (calificación 4)."
    }
  },
  {
    id: "economica",
    name: "Económica / financiera",
    icon: "dollar",
    description: "Costo de inversión y operación, relación beneficio-costo",
    modal: {
      explanation:
        "Analiza el costo total de la alternativa: inversión inicial, costos recurrentes de operación, mantenimiento y eventual disposición. Incluye análisis de flujo de caja, costo-beneficio y retorno de inversión.",
      keyQuestions: [
        "¿Cuál es el costo total de inversión inicial?",
        "¿Qué costos operativos recurrentes tendremos?",
        "¿Cuál es la relación beneficio-costo esperada?",
        "¿Cuándo recuperamos la inversión?"
      ],
      tips: "El costo más bajo no siempre es mejor. Una alternativa más cara puede generar mayor valor a largo plazo. Siempre considerar el horizonte de evaluación completo.",
      example:
        "Tercerizado: menor inversión inicial (calificación 3 en costo), pero costos recurrentes altos. Propio: mayor inversión (calificación 2), pero ahorro operativo a largo plazo."
    }
  },
  {
    id: "social",
    name: "Social",
    icon: "users",
    description: "Generación de empleo, aceptación de la comunidad, equidad",
    modal: {
      explanation:
        "Mide el impacto de la alternativa en las personas: empleo directo e indirecto, aceptación por parte de la comunidad afectada, inclusión de grupos vulnerables y equidad en la distribución de beneficios y cargas.",
      keyQuestions: [
        "¿Cuántos empleos se generan directa e indirectamente?",
        "¿La comunidad acepta y apoya esta alternativa?",
        "¿Beneficia de forma equitativa a diferentes grupos sociales?",
        "¿Hay algún grupo que se vea perjudicado?"
      ],
      tips: "Involucrar a la comunidad desde el diseño. Una alternativa técnicamente perfecta pero rechazada socialmente fracasará en la implementación.",
      example:
        "Propio genera más empleo directo (calificación 5). Tercerizado genera empleo indirecto pero con menor estabilidad (calificación 4)."
    }
  },
  {
    id: "ambiental",
    name: "Ambiental",
    icon: "leaf",
    description: "Huella adicional de instalaciones u operación",
    modal: {
      explanation:
        "Evalúa el impacto ambiental de la alternativa: emisiones, generación de residuos, consumo de recursos naturales, uso de suelo y cumplimiento de normativa ambiental vigente.",
      keyQuestions: [
        "¿Genera emisiones contaminantes adicionales?",
        "¿Cuál es el consumo de recursos naturales?",
        "¿Produce residuos que requieren manejo especial?",
        "¿Cumple con la normativa ambiental vigente?"
      ],
      tips: "Considerar no solo el impacto directo sino también el de la cadena de suministro. Una alternativa 'limpia' puede tener impactos ocultos en su cadena productiva.",
      example:
        "Tercerizado: menor huella ambiental directa (calificación 4), pero depende de las prácticas del proveedor. Propio: mayor control ambiental (calificación 3) pero requiere infraestructura propia."
    }
  },
  {
    id: "institucional",
    name: "Institucional / legal",
    icon: "building",
    description:
      "Capacidad de gestión del ejecutor, marco normativo, trámites requeridos",
    modal: {
      explanation:
        "Analiza la compatibilidad de la alternativa con la estructura institucional, el marco legal vigente, los trámites requeridos y la capacidad de gestión de la organización que la implementará.",
      keyQuestions: [
        "¿La organización tiene la capacidad legal para ejecutarla?",
        "¿Qué trámites y permisos se requieren?",
        "¿Es compatible con el marco normativo vigente?",
        "¿Tenemos la capacidad de gestión interna necesaria?"
      ],
      tips: "Verificar desde temprano los requisitos legales. Muchas alternativas viables técnica y económicamente fracasan por trámites lentos o restrictivos.",
      example:
        "Tercerizado: menor carga institucional (calificación 4), solo contrato. Propio: requiere crear unidad interna, contratación directa, normativa laboral (calificación 3)."
    }
  },
  {
    id: "sustentabilidad",
    name: "Sustentabilidad",
    icon: "refresh",
    description: "Permanencia del resultado en el tiempo",
    modal: {
      explanation:
        "Mide la capacidad de la alternativa para mantener sus resultados a largo plazo, incluyendo sostenibilidad financiera, institucional y ambiental. Una alternativa que genera beneficios momentáneos pero no perdura tiene baja sustentabilidad.",
      keyQuestions: [
        "¿Los resultados se mantienen más de 5 años?",
        "¿La alternativa es financieramente sostenible?",
        "¿Depende de factores externos controlables?",
        "¿Puede adaptarse a cambios futuros?"
      ],
      tips: "La sustentabilidad es el criterio más olvidado pero uno de los más importantes. Una alternativa con alta inversión pero baja sustentabilidad puede ser peor que una más modesta pero duradera.",
      example:
        "Propio: alta sustentabilidad (calificación 5), el conocimiento y la infraestructura permanecen. Tercerizado: dependencia del proveedor, riesgo de cambios de contrato (calificación 3)."
    }
  }
];

export const eapTree = {
  level1: {
    label: "Fin",
    desc: "Pérdidas económicas disminuidas · Imagen de la empresa mejorada · Frecuencia disminuida de lesiones y muertes"
  },
  level2: {
    label: "Propósito",
    desc: "Accidentalidad reducida de los automotores"
  },
  components: [
    {
      name: "C1: Capacitación",
      activities: [
        "Programa de formación en seguridad vial",
        "Talleres de conducción defensiva",
        "Certificación de conductores"
      ]
    },
    {
      name: "C2: Vehículos",
      activities: [
        "Adquisición de vehículos seguros",
        "Dotación de equipos de seguridad",
        "Sistema de monitoreo vehicular"
      ]
    },
    {
      name: "C3: Mantenimiento",
      activities: [
        "Plan preventivo de mantenimiento",
        "Inspecciones periódicas",
        "Revisión técnica obligatoria"
      ]
    }
  ]
};

export const checklistItems = [
  { id: 1, text: "¿Las alternativas cubren todos los medios identificados?" },
  { id: 2, text: "¿Los criterios reflejan las prioridades del proyecto?" },
  { id: 3, text: "¿Los pesos de los criterios suman 1.0?" },
  { id: 4, text: "¿La matriz está completa y sin errores de cálculo?" }
];
