import {
  FaStar,
  FaCodeBranch,
  FaCode,
  FaDatabase,
} from "react-icons/fa";

function RepositoryStats({ repositories }) {
  const totalStars = repositories.reduce(
    (total, repo) => total + repo.stargazers_count,
    0
  );

  const totalForks = repositories.reduce(
    (total, repo) => total + repo.forks_count,
    0
  );

  const totalLanguages = new Set(
    repositories
      .map((repo) => repo.language)
      .filter(Boolean)
  ).size;

  const stats = [
    {
      title: "Total Stars",
      value: totalStars.toLocaleString(),
      icon: <FaStar />,
      color: "text-yellow-400",
    },
    {
      title: "Total Forks",
      value: totalForks.toLocaleString(),
      icon: <FaCodeBranch />,
      color: "text-green-400",
    },
    {
      title: "Languages",
      value: totalLanguages,
      icon: <FaCode />,
      color: "text-blue-400",
    },
    {
      title: "Repositories",
      value: repositories.length,
      icon: <FaDatabase />,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-400 text-sm">
                {stat.title}
              </p>

              <h2 className="text-4xl font-bold text-white mt-3">
                {stat.value}
              </h2>
            </div>

            <div className={`text-4xl ${stat.color}`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RepositoryStats;