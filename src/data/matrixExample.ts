export interface Criteria {
  id: string;
  name: string;
  weight: number;
  description: string;
}

export interface Alternative {
  id: string;
  name: string;
  scores: Record<string, number>;
}

export const defaultCriteria: Criteria[] = [
  {
    id: "tecnica",
    name: "Técnica",
    weight: 0.2,
    description:
      "Calidad del proceso, control sobre la ejecución, tecnología disponible"
  },
  {
    id: "economica",
    name: "Económica / financiera",
    weight: 0.3,
    description: "Costo de inversión y operación, relación beneficio-costo"
  },
  {
    id: "social",
    name: "Social",
    weight: 0.1,
    description: "Generación de empleo, aceptación de la comunidad, equidad"
  },
  {
    id: "ambiental",
    name: "Ambiental",
    weight: 0.1,
    description: "Huella adicional de instalaciones u operación"
  },
  {
    id: "institucional",
    name: "Institucional / legal",
    weight: 0.15,
    description:
      "Capacidad de gestión del ejecutor, marco normativo, trámites requeridos"
  },
  {
    id: "sustentabilidad",
    name: "Sustentabilidad",
    weight: 0.15,
    description: "Permanencia del resultado en el tiempo"
  }
];

export const defaultAlternatives: Alternative[] = [
  {
    id: "alt1",
    name: "Alt. 1: Mantenimiento tercerizado",
    scores: {
      tecnica: 4,
      economica: 3,
      social: 4,
      ambiental: 4,
      institucional: 4,
      sustentabilidad: 3
    }
  },
  {
    id: "alt2",
    name: "Alt. 2: Mantenimiento propio",
    scores: {
      tecnica: 5,
      economica: 2,
      social: 5,
      ambiental: 3,
      institucional: 3,
      sustentabilidad: 5
    }
  }
];
