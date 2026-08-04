import type { ReactNode } from "react";
import { motion } from "motion/react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

const baseStyles =
  "font-jetbrains font-medium tracking-wider uppercase transition-all duration-200 rounded-lg inline-flex items-center justify-center gap-2";

const variants = {
  primary:
    "bg-primary-container text-on-primary hover:bg-primary-container/80 shadow-[0_0_12px_rgba(16,185,129,0.3)]",
  secondary:
    "bg-secondary-container text-on-secondary hover:bg-secondary-container/80",
  outline:
    "border border-outline text-on-surface-variant hover:bg-surface-container-high",
  ghost: "text-on-surface-variant hover:bg-surface-container-high"
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-sm"
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  disabled = false,
  ariaLabel
}: ButtonProps) {
  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
