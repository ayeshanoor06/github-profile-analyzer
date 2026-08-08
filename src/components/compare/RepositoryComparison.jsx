function RepositoryComparison({
  firstRepositories = [],
  secondRepositories = [],
  firstUsername = "User 1",
  secondUsername = "User 2",
}) {
  const calculateStats = (repositories) => {
    const totalStars = repositories.reduce(
      (sum, repo) => sum + (repo.stargazers_count || 0),
      0
    );

    const totalForks = repositories.reduce(
      (sum, repo) => sum + (repo.forks_count || 0),
      0
    );

    const averageStars =
      repositories.length > 0
        ? (totalStars / repositories.length).toFixed(1)
        : "0.0";

    const topRepository =
      repositories.length > 0
        ? [...repositories].sort(
            (a, b) =>
              (b.stargazers_count || 0) -
              (a.stargazers_count || 0)
          )[0]
        : null;

    return {
      totalStars,
      totalForks,
      averageStars,
      topRepository,
    };
  };

  const first = calculateStats(firstRepositories);
  const second = calculateStats(secondRepositories);

  return (
    <section className="mt-10">

      {/* =====================================================
          EXISTING REPOSITORY COMPARISON
          Keep this design unchanged
      ====================================================== */}

      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-lg">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">
            Repository Comparison
          </h2>

          <p className="text-slate-400 mt-2">
            Compare repository activity and popularity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* ================= FIRST USER ================= */}

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="text-xl font-bold text-white mb-6">
              {firstUsername}
            </h3>

            <div className="space-y-4">

              <StatRow
                icon="⭐"
                label="Total Stars"
                value={first.totalStars}
              />

              <StatRow
                icon="🍴"
                label="Total Forks"
                value={first.totalForks}
              />

              <StatRow
                icon="📈"
                label="Average Stars"
                value={first.averageStars}
              />

              <StatRow
                icon="🏆"
                label="Most Popular Repository"
                value={
                  first.topRepository
                    ? first.topRepository.name
                    : "No repositories"
                }
              />

            </div>
          </div>


          {/* ================= SECOND USER ================= */}

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="text-xl font-bold text-white mb-6">
              {secondUsername}
            </h3>

            <div className="space-y-4">

              <StatRow
                icon="⭐"
                label="Total Stars"
                value={second.totalStars}
              />

              <StatRow
                icon="🍴"
                label="Total Forks"
                value={second.totalForks}
              />

              <StatRow
                icon="📈"
                label="Average Stars"
                value={second.averageStars}
              />

              <StatRow
                icon="🏆"
                label="Most Popular Repository"
                value={
                  second.topRepository
                    ? second.topRepository.name
                    : "No repositories"
                }
              />

            </div>
          </div>

        </div>
      </div>


      {/* =====================================================
          NEW TOP REPOSITORY SECTION
          Added underneath the existing comparison
      ====================================================== */}

      <div className="mt-6 bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-lg">

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">
            🏆 Top Repository
          </h2>

          <p className="text-slate-400 mt-2">
            The most starred repository for each GitHub user.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-6">

          {/* FIRST USER TOP REPOSITORY */}

          <TopRepositoryCard
            username={firstUsername}
            repository={first.topRepository}
          />


          {/* SECOND USER TOP REPOSITORY */}

          <TopRepositoryCard
            username={secondUsername}
            repository={second.topRepository}
          />

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   STAT ROW
========================================================= */

function StatRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 bg-slate-800 rounded-lg p-4">

      <div className="flex items-center gap-3 min-w-0">

        <span className="text-xl">
          {icon}
        </span>

        <span className="text-slate-400 text-sm">
          {label}
        </span>

      </div>

      <span className="text-white font-semibold text-right break-words">
        {typeof value === "number"
          ? value.toLocaleString()
          : value}
      </span>

    </div>
  );
}


/* =========================================================
   TOP REPOSITORY CARD
========================================================= */

function TopRepositoryCard({
  username,
  repository,
}) {
  if (!repository) {
    return (
      <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

        <p className="text-slate-400 text-sm">
          @{username}
        </p>

        <h3 className="text-white font-bold text-lg mt-3">
          No repositories available
        </h3>

      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition">

      {/* User */}

      <div className="flex items-center justify-between gap-4">

        <div>

          <p className="text-blue-400 text-sm font-semibold">
            @{username}
          </p>

          <h3 className="text-xl font-bold text-white mt-2">
            {repository.name}
          </h3>

        </div>

        <div className="text-3xl">
          🏆
        </div>

      </div>


      {/* Description */}

      {repository.description && (
        <p className="text-slate-400 text-sm mt-4 line-clamp-2">
          {repository.description}
        </p>
      )}


      {/* Repository information */}

      <div className="flex flex-wrap gap-5 mt-5">

        <div className="text-yellow-400">
          ⭐{" "}
          <span className="text-white font-semibold">
            {(repository.stargazers_count || 0).toLocaleString()}
          </span>
          <span className="text-slate-400 ml-1">
            stars
          </span>
        </div>

        <div className="text-green-400">
          🍴{" "}
          <span className="text-white font-semibold">
            {(repository.forks_count || 0).toLocaleString()}
          </span>
          <span className="text-slate-400 ml-1">
            forks
          </span>
        </div>

        {repository.language && (
          <div className="text-blue-400">
            💻{" "}
            <span className="text-white font-semibold">
              {repository.language}
            </span>
          </div>
        )}

      </div>


      {/* GitHub link */}

      {repository.html_url && (
        <a
          href={repository.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-blue-400 hover:text-blue-300 text-sm font-semibold transition"
        >
          View Repository →
        </a>
      )}

    </div>
  );
}


export default RepositoryComparison;