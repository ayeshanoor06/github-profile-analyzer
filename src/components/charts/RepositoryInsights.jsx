import {
  FaStar,
  FaCodeBranch,
  FaCode,
  FaDatabase,
} from "react-icons/fa";

function RepositoryInsights({ repositories }) {
  const totalStars = repositories.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const totalForks = repositories.reduce(
    (sum, repo) => sum + repo.forks_count,
    0
  );

  const languages = new Set(
    repositories
      .map((repo) => repo.language)
      .filter(Boolean)
  );

  const cards = [
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
      value: languages.size,
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
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 mt-10">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
        >
          <div className="flex justify-between items-center">

            <div>

              <p className="text-slate-400 text-sm">
                {card.title}
              </p>

              <h2 className="text-4xl font-bold text-white mt-3">
                {card.value}
              </h2>

            </div>

            <div className={`text-4xl ${card.color}`}>
              {card.icon}
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default RepositoryInsights;