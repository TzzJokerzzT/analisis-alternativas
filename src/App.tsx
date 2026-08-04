import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { useKeyboardNav } from "@/hooks/useKeyboardNav";
import { TopNav } from "@/components/layout/TopNav";
import { SideNav } from "@/components/layout/SideNav";
import { BottomNav } from "@/components/layout/BottomNav";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { SlideContainer } from "@/components/layout/SlideContainer";
import { Slide01Portada } from "@/components/slides/Slide01Portada";
import { Slide01bArbol } from "@/components/slides/Slide01bArbol";
import { Slide02Ubicacion } from "@/components/slides/Slide02Ubicacion";
import { Slide02bAnalisis } from "@/components/slides/Slide02bAnalisis";
import { Slide03Pasos } from "@/components/slides/Slide03Pasos";
import { Slide04Preguntas } from "@/components/slides/Slide04Preguntas";
import { Slide05Criterios } from "@/components/slides/Slide05Criterios";
import { Slide05bCaso } from "@/components/slides/Slide05bCaso";
import { Slide05cTablaExplicacion } from "@/components/slides/Slide05cTablaExplicacion";
import { Slide06Matriz } from "@/components/slides/Slide06Matriz";
import { Slide08bSintesis } from "@/components/slides/Slide08bSintesis";
import { Slide07EAP } from "@/components/slides/Slide07EAP";
import { Slide12Errores } from "@/components/slides/Slide12Errores";
import { Slide08Cierre } from "@/components/slides/Slide08Cierre";
import {
  defaultCriteria,
  defaultAlternatives,
  type Criteria,
  type Alternative
} from "@/data/matrixExample";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 768
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isDesktop;
}

function App() {
  const { currentSlide, goTo, next, prev, progress, total } =
    useSlideNavigation();
  const [direction, setDirection] = useState(1);
  const isDesktop = useIsDesktop();

  // Matrix state lifted here for sharing between slides
  const [criteria, setCriteria] = useState<Criteria[]>(defaultCriteria);
  const [alternatives, setAlternatives] =
    useState<Alternative[]>(defaultAlternatives);

  const handleNext = useCallback(() => {
    setDirection(1);
    next();
  }, [next]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    prev();
  }, [prev]);

  const handleGoTo = useCallback(
    (n: number) => {
      setDirection(n > currentSlide ? 1 : -1);
      goTo(n);
    },
    [currentSlide, goTo]
  );

  const handleResetMatrix = useCallback(() => {
    setCriteria(defaultCriteria);
    setAlternatives(defaultAlternatives);
  }, []);

  useKeyboardNav({ onNext: handleNext, onPrev: handlePrev });

  const slideKeys = [
    "s1",
    "s1b",
    "s2",
    "s2b",
    "s3",
    "s4",
    "s5",
    "s5b",
    "s5c",
    "s6",
    "s8b",
    "s7",
    "s12e",
    "s8"
  ] as const;

  return (
    <div className="w-full h-full bg-background text-on-surface overflow-hidden">
      <a href="#slide-content" className="skip-link">
        Saltar al contenido
      </a>

      <ProgressBar current={currentSlide} total={total} percent={progress} />

      {isDesktop ? (
        <>
          <TopNav currentSlide={currentSlide} totalSlides={total} />
          <SideNav currentSlide={currentSlide} onGoTo={handleGoTo} />

          <div className="w-full h-full pt-14">
            <AnimatePresence mode="wait" custom={direction}>
              <SlideContainer
                key={currentSlide}
                slideIndex={currentSlide - 1}
                direction={direction}
              >
                {currentSlide === 1 && (
                  <Slide01Portada onNext={handleNext} total={total} />
                )}
                {currentSlide === 2 && <Slide02Ubicacion />}
                {currentSlide === 3 && <Slide01bArbol />}
                {currentSlide === 4 && <Slide02bAnalisis />}
                {currentSlide === 5 && <Slide04Preguntas />}
                {currentSlide === 6 && <Slide03Pasos />}
                {currentSlide === 7 && <Slide05Criterios />}
                {currentSlide === 8 && <Slide05bCaso />}
                {currentSlide === 9 && <Slide05cTablaExplicacion />}
                {currentSlide === 10 && (
                  <Slide06Matriz
                    criteria={criteria}
                    setCriteria={setCriteria}
                    alternatives={alternatives}
                    setAlternatives={setAlternatives}
                    onReset={handleResetMatrix}
                  />
                )}
                {currentSlide === 11 && (
                  <Slide08bSintesis
                    criteria={criteria}
                    alternatives={alternatives}
                  />
                )}
                {currentSlide === 12 && <Slide07EAP />}
                {currentSlide === 13 && <Slide12Errores />}
                {currentSlide === 14 && <Slide08Cierre onGoTo={handleGoTo} />}
              </SlideContainer>
            </AnimatePresence>
          </div>

          {currentSlide > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Slide anterior"
              className="fixed left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-surface-container/80 border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-200 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 3L5 8L10 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {currentSlide < total && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Siguiente slide"
              className="fixed right-20 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-surface-container/80 border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all duration-200 cursor-pointer"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 3L11 8L6 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </>
      ) : (
        <>
          <div className="pt-12 pb-20">
            <div id="slide-content" className="snap-y snap-mandatory">
              {slideKeys.map((key, i) => (
                <div
                  key={key}
                  className="snap-start min-h-screen flex items-center justify-center"
                >
                  {i === 0 && (
                    <Slide01Portada onNext={handleNext} total={total} />
                  )}
                  {i === 1 && <Slide01bArbol />}
                  {i === 2 && <Slide02bAnalisis />}
                  {i === 3 && <Slide02Ubicacion />}
                  {i === 4 && <Slide04Preguntas />}
                  {i === 5 && <Slide03Pasos />}
                  {i === 6 && <Slide05Criterios />}
                  {i === 7 && <Slide05bCaso />}
                  {i === 8 && <Slide05cTablaExplicacion />}
                  {i === 9 && (
                    <Slide06Matriz
                      criteria={criteria}
                      setCriteria={setCriteria}
                      alternatives={alternatives}
                      setAlternatives={setAlternatives}
                      onReset={handleResetMatrix}
                    />
                  )}
                  {i === 10 && (
                    <Slide08bSintesis
                      criteria={criteria}
                      alternatives={alternatives}
                    />
                  )}
                  {i === 11 && <Slide07EAP />}
                  {i === 12 && <Slide12Errores />}
                  {i === 13 && <Slide08Cierre onGoTo={handleGoTo} />}
                </div>
              ))}
            </div>
          </div>
          <BottomNav currentSlide={currentSlide} onGoTo={handleGoTo} />
        </>
      )}
    </div>
  );
}

export default App;
