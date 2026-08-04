interface ProgressBarProps {
  current: number;
  total: number;
  percent: number;
}

export function ProgressBar({ current, total, percent }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center gap-3 bg-surface-container/80 backdrop-blur-md px-6 py-2 border-b border-outline-variant/20">
      <span className="font-jetbrains text-xs text-on-surface-variant tracking-wider uppercase">
        {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <div
        className="flex-1 h-1 bg-surface-container-highest rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-label={`Slide ${current} of ${total}`}
      >
        <div
          className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="font-jetbrains text-xs text-primary font-medium">
        {Math.round(percent)}%
      </span>
    </div>
  );
}
