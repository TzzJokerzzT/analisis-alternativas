interface ChipProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary" | "error" | "default";
  className?: string;
}

const colorMap = {
  primary: "bg-primary/15 text-primary border-primary/30",
  secondary: "bg-secondary/15 text-secondary border-secondary/30",
  tertiary: "bg-tertiary/15 text-tertiary border-tertiary/30",
  error: "bg-error/15 text-error border-error/30",
  default:
    "bg-surface-container-high text-on-surface-variant border-outline-variant/30"
};

export function Chip({
  children,
  color = "primary",
  className = ""
}: ChipProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-jetbrains
        tracking-wider uppercase border
        ${colorMap[color]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
