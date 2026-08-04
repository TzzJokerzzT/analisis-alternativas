import { useEffect } from "react";

interface UseKeyboardNavOptions {
  onNext: () => void;
  onPrev: () => void;
  enabled?: boolean;
}

export function useKeyboardNav({
  onNext,
  onPrev,
  enabled = true
}: UseKeyboardNavOptions) {
  useEffect(() => {
    if (!enabled) return undefined;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        onNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        onPrev();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onNext, onPrev, enabled]);
}
