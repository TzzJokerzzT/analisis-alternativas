import { slides } from "@/data/slides";

interface SideNavProps {
  currentSlide: number;
  onGoTo: (n: number) => void;
}

export function SideNav({ currentSlide, onGoTo }: SideNavProps) {
  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2"
      aria-label="Navegación de slides"
    >
      {slides.map((s) => (
        <button
          type="button"
          key={s.id}
          onClick={() => onGoTo(s.id)}
          aria-label={`Ir a slide ${s.id}: ${s.label}`}
          aria-current={currentSlide === s.id ? "step" : undefined}
          className={`group relative flex items-center justify-end gap-2 transition-all duration-200 ${
            currentSlide === s.id ? "justify-end" : "justify-end"
          }`}
        >
          <span
            className={`text-xs font-inter opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
              currentSlide === s.id
                ? "text-primary font-medium"
                : "text-on-surface-variant"
            }`}
          >
            {s.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              currentSlide === s.id
                ? "w-3 h-3 bg-primary shadow-[0_0_8px_rgba(78,222,163,0.5)]"
                : "w-2 h-2 bg-outline-variant group-hover:bg-on-surface-variant"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
