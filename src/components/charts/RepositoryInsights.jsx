function RepositoryInsights({ repositories }) {
  const totalStars = repositories.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0
  );

  const totalForks = repositories.reduce(
    (sum, repo) => sum + repo.forks_count,
    0
  );

  const totalLanguages = new Set(
    repositories
      .map((repo) => repo.language)
      .filter(Boolean)
  ).size;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <h3 className="text-gray-500 text-sm">
          ⭐ Total Stars
        </h3>

        <p className="text-3xl font-bold mt-2">
          {totalStars}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <h3 className="text-gray-500 text-sm">
          🍴 Total Forks
        </h3>

        <p className="text-3xl font-bold mt-2">
          {totalForks}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <h3 className="text-gray-500 text-sm">
          💻 Languages
        </h3>

        <p className="text-3xl font-bold mt-2">
          {totalLanguages}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <h3 className="text-gray-500 text-sm">
          📁 Repositories
        </h3>

        <p className="text-3xl font-bold mt-2">
          {repositories.length}
        </p>
      </div>
    </div>
  );
}

export default RepositoryInsights;