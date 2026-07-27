function RepositoryStats({ repositories }) {
  // Total Stars
  const totalStars = repositories.reduce(
    (total, repo) => total + repo.stargazers_count,
    0
  );

  // Total Forks
  const totalForks = repositories.reduce(
    (total, repo) => total + repo.forks_count,
    0
  );

  // Total Languages
  const totalLanguages = new Set(
    repositories
      .map((repo) => repo.language)
      .filter(Boolean)
  ).size;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      <StatCard
        title="⭐ Total Stars"
        value={totalStars}
      />

      <StatCard
        title="🍴 Total Forks"
        value={totalForks}
      />

      <StatCard
        title="💻 Languages"
        value={totalLanguages}
      />

      <StatCard
        title="📦 Repositories"
        value={repositories.length}
      />
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-3">
        {value}
      </p>
    </div>
  );
}

export default RepositoryStats;