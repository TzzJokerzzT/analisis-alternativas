import { useState, useCallback, useEffect } from "react";

const TOTAL_SLIDES = 14;

export function useSlideNavigation() {
  const [currentSlide, setCurrentSlide] = useState(() => {
    const hash = window.location.hash.replace("#slide-", "");
    const num = parseInt(hash, 10);
    return num >= 1 && num <= TOTAL_SLIDES ? num : 1;
  });

  const goTo = useCallback((n: number) => {
    const clamped = Math.max(1, Math.min(TOTAL_SLIDES, n));
    setCurrentSlide(clamped);
    window.history.replaceState(null, "", `#slide-${clamped}`);
  }, []);

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#slide-", "");
      const num = parseInt(hash, 10);
      if (num >= 1 && num <= TOTAL_SLIDES && num !== currentSlide) {
        setCurrentSlide(num);
      }
    };
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [currentSlide]);

  const progress = ((currentSlide - 1) / (TOTAL_SLIDES - 1)) * 100;

  return { currentSlide, goTo, next, prev, progress, total: TOTAL_SLIDES };
}
