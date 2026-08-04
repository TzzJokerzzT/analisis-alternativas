import { motion } from "motion/react";

interface TreeDiagramProps {
  tree: {
    level1: { label: string; desc: string };
    level2: { label: string; desc: string };
    components: {
      name: string;
      activities: string[];
    }[];
  };
}

function TreeNodeCard({
  label,
  desc,
  level
}: {
  label: string;
  desc: string;
  level: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`
        border rounded-lg px-6 py-3 text-center
        ${
          level === 1
            ? "bg-primary-container/10 border-primary/30 shadow-[0_0_16px_rgba(78,222,163,0.1)]"
            : "bg-surface-container-high border-outline-variant/30"
        }
      `}
    >
      <span
        className={`font-jetbrains text-[10px] tracking-widest uppercase ${
          level === 1 ? "text-primary" : "text-on-surface-variant"
        }`}
      >
        {label}
      </span>
      <p className="font-sora text-sm font-semibold text-on-surface mt-0.5">
        {desc}
      </p>
    </motion.div>
  );
}

export function TreeDiagram({ tree }: TreeDiagramProps) {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="min-w-[700px] flex flex-col items-center gap-2">
        <TreeNodeCard
          label={tree.level1.label}
          desc={tree.level1.desc}
          level={1}
        />

        <svg width="2" height="24" className="text-primary">
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="24"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>

        <TreeNodeCard
          label={tree.level2.label}
          desc={tree.level2.desc}
          level={2}
        />

        <svg width="600" height="24" className="text-primary hidden md:block">
          <line
            x1="300"
            y1="0"
            x2="300"
            y2="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="100"
            y1="10"
            x2="500"
            y2="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="100"
            y1="10"
            x2="100"
            y2="24"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="300"
            y1="10"
            x2="300"
            y2="24"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="500"
            y1="10"
            x2="500"
            y2="24"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full justify-center">
          {tree.components.map((comp) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex-1 max-w-[280px]"
            >
              <div className="bg-surface-container-high border border-outline-variant/30 rounded-lg p-3 text-center mb-2">
                <span className="font-sora text-sm font-semibold text-on-surface">
                  {comp.name}
                </span>
              </div>

              <div className="flex flex-col gap-1.5 ml-4 md:ml-0">
                {comp.activities.map((act) => (
                  <div
                    key={act}
                    className="bg-surface-container border border-outline-variant/20 rounded px-3 py-2 text-xs font-inter text-on-surface-variant"
                  >
                    {act}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
