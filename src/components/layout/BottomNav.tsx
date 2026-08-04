import { slides } from "@/data/slides";

interface BottomNavProps {
  currentSlide: number;
  onGoTo: (n: number) => void;
}

export function BottomNav({ currentSlide, onGoTo }: BottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex items-center justify-between bg-surface-container/90 backdrop-blur-md border-t border-outline-variant/20 px-4 py-3"
      aria-label="Navegación de slides"
    >
      {slides.map((s) => (
        <button
          type="button"
          key={s.id}
          onClick={() => onGoTo(s.id)}
          aria-label={`Ir a slide ${s.id}: ${s.label}`}
          aria-current={currentSlide === s.id ? "step" : undefined}
          className={`flex flex-col items-center gap-1 transition-all duration-200 ${
            currentSlide === s.id ? "text-primary" : "text-on-surface-variant"
          }`}
        >
          <span
            className={`block rounded-full transition-all duration-300 ${
              currentSlide === s.id
                ? "w-2 h-2 bg-primary"
                : "w-1.5 h-1.5 bg-outline-variant"
            }`}
          />
          <span className="text-[10px] font-jetbrains tracking-wider">
            {String(s.id).padStart(2, "0")}
          </span>
        </button>
      ))}
    </nav>
  );
}
