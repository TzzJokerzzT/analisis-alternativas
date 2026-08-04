interface TopNavProps {
  currentSlide: number;
  totalSlides: number;
}

export function TopNav({ currentSlide, totalSlides }: TopNavProps) {
  return (
    <nav
      className="fixed top-7 left-0 right-0 z-40 flex items-center justify-between px-6 py-3 bg-surface/90 backdrop-blur-md border-b border-outline-variant/10"
      aria-label="Navegación principal"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
          <span className="font-sora text-sm font-bold text-on-primary">
            <img src="/logo.png" alt="Logo" className="rounded-full" />
          </span>
        </div>
        <span className="font-sora text-sm font-semibold text-on-surface hidden sm:inline">
          Análisis de Alternativas
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-jetbrains text-xs text-on-surface-variant tracking-widest uppercase">
          Slide {String(currentSlide).padStart(2, "0")} {"//"}{" "}
          {String(totalSlides).padStart(2, "0")}
        </span>
      </div>
    </nav>
  );
}
