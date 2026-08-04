import { useState } from "react";
import { motion } from "motion/react";

interface ChecklistItem {
  id: number;
  text: string;
}

interface ChecklistProps {
  items: ChecklistItem[];
}

export function Checklist({ items }: ChecklistProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (id: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const allChecked = checked.size === items.length;

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const isChecked = checked.has(item.id);
        return (
          <motion.button
            key={item.id}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggle(item.id)}
            className={`
              flex items-center gap-3 p-3 rounded-lg border text-left transition-all duration-200 cursor-pointer
              ${
                isChecked
                  ? "bg-primary/10 border-primary/30"
                  : "bg-surface-container border-outline-variant/20 hover:border-outline-variant/40"
              }
            `}
          >
            <div
              className={`
                w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border-2 transition-all duration-200
                ${
                  isChecked
                    ? "bg-primary-container border-primary"
                    : "border-outline-variant/40"
                }
              `}
            >
              {isChecked && (
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2 6L5 9L10 3"
                    stroke="#003824"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              )}
            </div>
            <span
              className={`font-inter text-sm ${
                isChecked
                  ? "text-primary line-through opacity-70"
                  : "text-on-surface"
              }`}
            >
              {item.text}
            </span>
          </motion.button>
        );
      })}

      <div className="mt-2">
        <div className="flex items-center justify-between mb-1">
          <span className="font-jetbrains text-xs text-on-surface-variant tracking-wider uppercase">
            Progreso
          </span>
          <span
            className={`font-jetbrains text-xs font-medium ${allChecked ? "text-primary" : "text-on-surface-variant"}`}
          >
            {checked.size}/{items.length}
          </span>
        </div>
        <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(checked.size / items.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>
    </div>
  );
}
