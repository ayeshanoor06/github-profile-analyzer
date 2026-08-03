import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
  "#EC4899",
  "#84CC16",
];

function LanguagePieChart({ repositories }) {
  const languageCount = {};

  repositories.forEach((repo) => {
    if (!repo.language) return;

    languageCount[repo.language] =
      (languageCount[repo.language] || 0) + 1;
  });

  const data = Object.entries(languageCount).map(
    ([language, value]) => ({
      name: language,
      value,
    })
  );

  if (data.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Language Distribution
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={
                  COLORS[index % COLORS.length]
                }
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LanguagePieChart;