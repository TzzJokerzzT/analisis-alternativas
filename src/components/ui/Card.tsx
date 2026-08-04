import type { ReactNode } from "react";
import { motion } from "motion/react";

interface CardProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className = "",
  active = false,
  onClick
}: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      transition={{ type: "spring", stiffness: 399, damping: 25 }}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-xl border
        ${
          active
            ? "bg-surface-container-high border-primary/40 shadow-[0_0_20px_rgba(78,222,163,0.1)]"
            : "bg-surface-container border-outline-variant/20 hover:border-outline-variant/40"
        }
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
      {active && (
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      )}
    </motion.div>
  );
}
