# Brief de proyecto para OpenCode

## Landing interactiva estilo "slide deck" — Análisis de Alternativas (Marco Lógico)

---

## 1. Objetivo del proyecto

Construir una **landing page de una sola vista, estilo presentación/slide deck interactivo** (no scroll tradicional de blog, sino pantallas completas navegables) que explique el tema **"Análisis de Alternativas dentro de la Metodología del Marco Lógico"**, dirigida a estudiantes/profesionales de formulación de proyectos.

Stack obligatorio: **React 18 + TypeScript + Vite**, animaciones con **Framer Motion**, componentes de interfaz con **HeroUI**.

---

## 2. Contexto de contenido — resumen de la investigación

Usa este contenido como fuente de verdad para los textos de la app (puedes resumir aún más para que quepa en pantalla, pero no inventes conceptos nuevos).

**Ubicación en el ciclo del Marco Lógico:**
Árbol de problemas → Árbol de objetivos (medios-fines) → **Análisis de Alternativas** → Selección de la estrategia óptima → Estructura Analítica del Proyecto (EAP) → Matriz de Marco Lógico.

**Concepto:**
El análisis de alternativas parte del árbol de objetivos: se identifican y agrupan acciones capaces de resolver el problema central, se comparan según criterios definidos y se selecciona la más viable. Responde a tres preguntas: ¿qué caminos existen?, ¿con qué criterios se comparan?, ¿cuál conviene ejecutar?

**Pasos del proceso:**

1. Identificar acciones concretas para cada medio del árbol de objetivos.
2. Agrupar las acciones en alternativas, distinguiendo **complementarias** (se combinan en una misma alternativa) de **excluyentes** (son caminos alternativos entre sí).
3. Definir criterios de evaluación y su peso relativo.
4. Construir una matriz comparativa (simple o ponderada/multicriterio).
5. Seleccionar la alternativa óptima y justificar la decisión.

**Criterios típicos de evaluación:**

| Criterio               | Qué evalúa                                                              |
| ---------------------- | ----------------------------------------------------------------------- |
| Técnica                | Calidad del proceso, control sobre la ejecución, tecnología disponible  |
| Económica / financiera | Costo de inversión y operación, relación beneficio-costo                |
| Social                 | Generación de empleo, aceptación de la comunidad, equidad               |
| Ambiental              | Huella adicional de instalaciones u operación                           |
| Institucional / legal  | Capacidad de gestión del ejecutor, marco normativo, trámites requeridos |
| Sustentabilidad        | Permanencia del resultado en el tiempo                                  |

**Errores comunes a mencionar (para una slide de cierre tipo checklist):**

- Comparar con un único criterio (normalmente costo).
- Asumir que todos los criterios pesan igual sin justificarlo.
- No distinguir acciones complementarias de excluyentes.
- No documentar por qué se descartaron las demás alternativas.

---

## 3. Caso de ejemplo a incluir en la app (dataset real para la matriz)

**Problema central:** alta accidentalidad de los vehículos de una empresa de transporte.

**Medios → acciones:**

| Medio                           | Acciones                                                              |
| ------------------------------- | --------------------------------------------------------------------- |
| Prudencia de conductores        | Contratación de nuevos conductores · Capacitación en manejo seguro    |
| Vehículos en buen estado        | Compra de vehículos nuevos · Reparación de vehículos existentes       |
| Buen mantenimiento de vehículos | Mantenimiento externo (tercerizado) · Unidad interna de mantenimiento |

**Alternativas (las dos opciones de mantenimiento son excluyentes, el resto de acciones son comunes a ambas):**

- **Alternativa 1 — Mantenimiento tercerizado**
- **Alternativa 2 — Mantenimiento propio**

**Matriz de análisis de alternativas (ponderada, escala 1–5):**

| Criterio               | Peso     | Alt. 1 (puntaje → ponderado) | Alt. 2 (puntaje → ponderado) |
| ---------------------- | -------- | ---------------------------- | ---------------------------- |
| Técnica                | 0.20     | 4 → 0.80                     | 5 → 1.00                     |
| Económica / financiera | 0.30     | 3 → 0.90                     | 2 → 0.60                     |
| Social                 | 0.10     | 4 → 0.40                     | 5 → 0.50                     |
| Ambiental              | 0.10     | 4 → 0.40                     | 3 → 0.30                     |
| Institucional / legal  | 0.15     | 4 → 0.60                     | 3 → 0.45                     |
| Sustentabilidad        | 0.15     | 3 → 0.45                     | 5 → 0.75                     |
| **Total ponderado**    | **1.00** | **3.55**                     | **3.60**                     |

**Alternativa seleccionada:** Alternativa 2 (Mantenimiento propio), por mayor sustentabilidad e impacto social, pese a exigir mayor inversión inicial. Úsalo como ejemplo de decisión con márgenes ajustados donde el trade-off importa más que "ganar por mucho".

**EAP resultante (para la slide del árbol jerárquico):**

```
FIN
 ├─ Pérdidas económicas disminuidas
 ├─ Imagen de la empresa mejorada
 └─ Frecuencia disminuida de lesiones y muertes

PROPÓSITO
 └─ Accidentalidad reducida de los automotores

COMPONENTES
 ├─ C1. Programa de capacitación de conductores desarrollado
 ├─ C2. Vehículos renovados (comprados y reparados)
 └─ C3. Unidad de mantenimiento implementada

ACTIVIDADES
 ├─ C1 → Diseño de cursos · Contratación de instructores · Selección de participantes · Ejecución · Evaluación
 ├─ C2 → Cotización · Licitación/compra · Reparación de unidades existentes
 └─ C3 → Adecuación de infraestructura del taller · Contratación de personal técnico · Dotación de equipos · Puesta en marcha
```

Modela este dataset como un objeto TypeScript tipado (no lo hardcodees disperso en el JSX) para que sea fácil de reutilizar en la feature interactiva del punto 7.

---

## 4. Especificación de pantallas (8 slides, navegación tipo carrusel full-screen)

1. **Portada** — título "Análisis de Alternativas", subtítulo "Metodología del Marco Lógico", CTA "Comenzar recorrido".
2. **Ubicación en el ciclo** — stepper horizontal de 6 etapas con "Alternativas" resaltada.
3. **Concepto** — 3 tarjetas con las preguntas clave (qué caminos, qué criterios, cuál elegir).
4. **Pasos del proceso** — timeline vertical con los 5 pasos.
5. **Criterios de evaluación** — grid de 6 tarjetas (una por criterio de la tabla del punto 2).
6. **Matriz ponderada interactiva** — ver punto 7, es la slide más elaborada.
7. **EAP resultante** — árbol jerárquico animado (Fin → Propósito → Componentes → Actividades).
8. **Cierre** — checklist de errores comunes + CTA final.

---

## 5. Stack técnico y arquitectura de carpetas sugerida

```
src/
  App.tsx
  main.tsx
  data/
    slides.ts          // contenido tipado de cada slide
    matrixExample.ts    // dataset del caso de ejemplo (punto 3), tipado
  components/
    SlideDeck.tsx        // controla índice activo, AnimatePresence, navegación
    NavigationDots.tsx
    ProgressBar.tsx
    slides/
      CoverSlide.tsx
      CycleStepperSlide.tsx
      ConceptSlide.tsx
      ProcessStepsSlide.tsx
      CriteriaGridSlide.tsx
      WeightedMatrixSlide.tsx   // slide interactiva del punto 7
      EAPTreeSlide.tsx
      ClosingSlide.tsx
  hooks/
    useSlideNavigation.ts  // teclado (flechas), swipe, índice actual
  theme/
    heroui-theme.ts        // paleta slate/emerald/amber
```

- React 18 + TypeScript + Vite.
- Framer Motion: `AnimatePresence` para la transición entre slides (fade + desplazamiento horizontal), `variants` con `staggerChildren` para el revelado escalonado de título → subtítulo → tarjetas dentro de cada slide.
- HeroUI para botones, `Card`, `Chip`, `Progress`, `Table` — tematizado con paleta slate/navy de fondo, acento verde esmeralda y ámbar para resaltados.
- Navegación: flechas de teclado, swipe en móvil, clic en dots del indicador de progreso.
- Responsive: layout de slide completo en desktop; en móvil, permite scroll vertical por secciones en vez de carrusel forzado.
- Accesibilidad: `aria-live="polite"` al cambiar de slide, soporte a `prefers-reduced-motion` (si está activo, reduce duración/desplazamiento de las animaciones en vez de desactivarlas por completo).

---

## 6. Feature interactiva especial — Slide 6 (matriz editable en vivo)

Esta es la slide que le da sentido a "interactivo", más allá de la navegación:

- Muestra la tabla del punto 3 (criterios, pesos, alternativas) con **sliders de HeroUI** para ajustar el peso de cada criterio en tiempo real (los pesos deben normalizarse o avisar visualmente si no suman 1.00).
- Al mover un slider, recalcula y **anima con Framer Motion** (usando `animate` sobre un `motion.span` con un valor numérico interpolado, o `useSpring`/`useMotionValue`) el puntaje ponderado total de cada alternativa y las barras comparativas.
- Resalta automáticamente cuál alternativa gana con los pesos actuales (color esmeralda) y muestra el margen de diferencia.
- Incluye un botón "Restablecer" que vuelve a los pesos originales del caso de ejemplo (punto 3) con una transición animada.

---

## 7. Criterios de aceptación (Definition of Done)

- [ ] Compila sin errores de TypeScript (`tsc --noEmit` limpio).
- [ ] Las 8 slides son navegables por teclado, clic y swipe, sin saltos visuales bruscos.
- [ ] La slide 6 recalcula en vivo y anima los totales al mover cualquier slider.
- [ ] El árbol EAP de la slide 7 se revela progresivamente (no aparece todo de golpe).
- [ ] `prefers-reduced-motion` reduce las animaciones sin romper la navegación.
- [ ] Diseño responsive verificado en un viewport móvil (scroll vertical) y uno desktop (slide full-screen).
- [ ] Todo el contenido textual proviene del contexto de este brief — nada inventado fuera del tema.

---

## 8. Primer paso sugerido para OpenCode

Antes de generar código, propone en modo Plan: (a) el modelo de datos TypeScript para `slides.ts` y `matrixExample.ts`, (b) la estructura del componente `SlideDeck` con `AnimatePresence`, y (c) cómo se tematiza HeroUI con la paleta indicada. Una vez aprobado el plan, implementa slide por slide, empezando por Portada → Matriz interactiva → resto de slides.
