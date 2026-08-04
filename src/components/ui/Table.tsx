interface MatrixRow {
  name: string;
  weight: number;
  scores: number[];
}

interface MatrixTableProps {
  criteria: MatrixRow[];
  alternatives: { name: string; scores: number[] }[];
  totals: number[];
}

export function MatrixTable({
  criteria,
  alternatives,
  totals
}: MatrixTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse min-w-[500px]">
        <thead>
          <tr className="border-b border-outline-variant/30">
            <th className="text-left py-3 px-3 font-jetbrains text-xs tracking-wider uppercase text-on-surface-variant">
              Criterio
            </th>
            <th className="text-center py-3 px-3 font-jetbrains text-xs tracking-wider uppercase text-on-surface-variant">
              Peso
            </th>
            {alternatives.map((alt) => (
              <th
                key={alt.name}
                className="text-center py-3 px-3 font-jetbrains text-xs tracking-wider uppercase text-on-surface-variant"
              >
                {alt.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {criteria.map((row, i) => (
            <tr
              key={row.name}
              className="border-b border-outline-variant/10 hover:bg-surface-container-high/50 transition-colors"
            >
              <td className="py-3 px-3 font-inter text-sm text-on-surface">
                {row.name}
              </td>
              <td className="py-3 px-3 text-center font-jetbrains text-sm text-secondary">
                {row.weight.toFixed(2)}
              </td>
              {alternatives.map((alt) => (
                <td
                  key={alt.name}
                  className="py-3 px-3 text-center font-jetbrains text-sm text-on-surface-variant"
                >
                  {alt.scores[i]}
                </td>
              ))}
            </tr>
          ))}
          <tr className="border-t-2 border-primary/30 bg-surface-container-high/30">
            <td className="py-3 px-3 font-sora text-sm font-semibold text-on-surface">
              Total Ponderado
            </td>
            <td className="py-3 px-3 text-center font-jetbrains text-sm text-primary font-medium">
              1.00
            </td>
            {totals.map((total, i) => (
              <td
                key={`total-${criteria[i]?.name ?? i}`}
                className={`py-3 px-3 text-center font-jetbrains text-sm font-bold ${
                  total === Math.max(...totals)
                    ? "text-primary"
                    : "text-on-surface-variant"
                }`}
              >
                {total.toFixed(2)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
