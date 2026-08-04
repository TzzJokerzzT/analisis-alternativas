import { motion } from "motion/react";

interface TimelineStep {
  num: string;
  title: string;
  desc: string;
  active?: boolean;
  highlighted?: boolean;
}

interface TimelineProps {
  steps: TimelineStep[];
}

function StepContent({
  step,
  align
}: {
  step: TimelineStep;
  align: "left" | "right";
}) {
  return (
    <div
      className={`${align === "right" ? "text-right" : "text-left"} max-w-sm`}
    >
      <h4
        className={`font-sora text-base font-semibold mb-1 ${
          step.highlighted ? "text-primary" : "text-on-surface"
        }`}
      >
        {step.title}
      </h4>
      <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
        {step.desc}
      </p>
    </div>
  );
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 -translate-x-1/2 hidden md:block" />
      <div className="absolute left-6 top-0 bottom-0 w-px bg-outline-variant/30 md:hidden" />

      <div className="flex flex-col gap-8 md:gap-6">
        {steps.map((step, i) => {
          const isEven = i % 2 === 0;
          const justifyClass = isEven
            ? "justify-end pr-8"
            : "justify-start pl-8";
          const align = isEven ? "right" : "left";
          const flexDir = isEven ? "md:flex-row" : "md:flex-row-reverse";

          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: isEven ? -20 : 20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`relative flex items-start gap-4 md:gap-0 ${flexDir}`}
            >
              <div className={`hidden md:flex w-1/2 ${justifyClass}`}>
                <StepContent step={step} align={align} />
              </div>

              <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                {(() => {
                  let circleStyle =
                    "bg-surface-container border-outline-variant/40";
                  if (step.highlighted) {
                    circleStyle =
                      "bg-primary-container border-primary shadow-[0_0_16px_rgba(78,222,163,0.4)] animate-pulse-glow";
                  } else if (step.active) {
                    circleStyle = "bg-surface-container-high border-primary/50";
                  }
                  return (
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${circleStyle}`}
                    >
                      <span
                        className={`font-jetbrains text-sm font-medium ${
                          step.highlighted
                            ? "text-on-primary"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {step.num}
                      </span>
                    </div>
                  );
                })()}
              </div>

              <div className="md:hidden flex-1 pl-4">
                <StepContent step={step} align="left" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
