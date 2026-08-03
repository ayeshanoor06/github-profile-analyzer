import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function StarsBarChart({ repositories }) {
  const data = repositories
    .map((repo) => ({
      name:
        repo.name.length > 12
          ? repo.name.slice(0, 12) + "..."
          : repo.name,
      stars: repo.stargazers_count,
    }))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 10);

  if (data.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Top Starred Repositories
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="stars"
            fill="#3B82F6"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StarsBarChart;