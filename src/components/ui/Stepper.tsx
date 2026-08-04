import { motion } from "motion/react";

interface StepperStage {
  num: string;
  label: string;
}

interface StepperProps {
  stages: StepperStage[];
  activeIndex: number;
}

function getStageStyle(isActive: boolean, isPast: boolean) {
  if (isActive) {
    return "bg-primary-container border-primary shadow-[0_0_16px_rgba(78,222,163,0.4)]";
  }
  if (isPast) {
    return "bg-surface-container-high border-primary/40";
  }
  return "bg-surface-container border-outline-variant/30";
}

function getTextColor(isActive: boolean, isPast: boolean) {
  if (isActive) return "text-on-primary";
  if (isPast) return "text-primary";
  return "text-on-surface-variant";
}

export function Stepper({ stages, activeIndex }: StepperProps) {
  return (
    <div className="flex items-center gap-1 md:gap-2 w-full overflow-x-auto pb-2">
      {stages.map((stage, i) => {
        const isActive = i === activeIndex;
        const isPast = i < activeIndex;

        return (
          <div
            key={stage.num}
            className="flex items-center flex-1 min-w-[80px]"
          >
            <div className="flex flex-col items-center gap-1.5 flex-1">
              <motion.div
                initial={isActive ? { scale: 0 } : false}
                animate={{ scale: 1 }}
                className={`
                  relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${getStageStyle(isActive, isPast)}
                `}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping-slow" />
                )}
                <span
                  className={`relative font-jetbrains text-xs font-medium ${getTextColor(isActive, isPast)}`}
                >
                  {stage.num}
                </span>
              </motion.div>
              <span
                className={`text-[10px] md:text-xs font-inter text-center leading-tight ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-on-surface-variant"
                }`}
              >
                {stage.label}
              </span>
            </div>
            {i < stages.length - 1 && (
              <div
                className={`h-px flex-1 mx-1 mt-[-18px] transition-colors duration-300 ${
                  isPast ? "bg-primary/40" : "bg-outline-variant/20"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
