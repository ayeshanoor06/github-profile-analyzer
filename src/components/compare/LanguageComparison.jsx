function LanguageComparison({
  firstRepositories = [],
  secondRepositories = [],
  firstUsername = "User 1",
  secondUsername = "User 2",
}) {
  const getLanguages = (repositories) => {
    return [
      ...new Set(
        repositories
          .map((repo) => repo.language)
          .filter(Boolean)
      ),
    ].sort();
  };

  const firstLanguages = getLanguages(firstRepositories);
  const secondLanguages = getLanguages(secondRepositories);

  const commonLanguages = firstLanguages.filter((language) =>
    secondLanguages.includes(language)
  );

  return (
    <section className="mt-6">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-lg">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Programming Language Comparison
          </h2>

          <p className="text-slate-400 mt-2">
            Compare the programming languages used across their repositories.
          </p>
        </div>

        {/* Users */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* First User */}
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="text-xl font-bold text-white">
              @{firstUsername}
            </h3>

            <p className="text-slate-400 text-sm mt-1">
              {firstLanguages.length} languages
            </p>

            <div className="flex flex-wrap gap-2 mt-5">

              {firstLanguages.length > 0 ? (
                firstLanguages.map((language) => (
                  <span
                    key={language}
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${
                      commonLanguages.includes(language)
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-slate-800 text-blue-400 border border-slate-700"
                    }`}
                  >
                    {language}

                    {commonLanguages.includes(language) && (
                      <span className="ml-1">
                        ✓
                      </span>
                    )}
                  </span>
                ))
              ) : (
                <p className="text-slate-500">
                  No language data available.
                </p>
              )}

            </div>

          </div>


          {/* Second User */}
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">

            <h3 className="text-xl font-bold text-white">
              @{secondUsername}
            </h3>

            <p className="text-slate-400 text-sm mt-1">
              {secondLanguages.length} languages
            </p>

            <div className="flex flex-wrap gap-2 mt-5">

              {secondLanguages.length > 0 ? (
                secondLanguages.map((language) => (
                  <span
                    key={language}
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${
                      commonLanguages.includes(language)
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-slate-800 text-purple-400 border border-slate-700"
                    }`}
                  >
                    {language}

                    {commonLanguages.includes(language) && (
                      <span className="ml-1">
                        ✓
                      </span>
                    )}
                  </span>
                ))
              ) : (
                <p className="text-slate-500">
                  No language data available.
                </p>
              )}

            </div>

          </div>

        </div>


        {/* Common Languages */}
        <div className="mt-6 bg-slate-900 border border-slate-700 rounded-xl p-6">

          <div className="flex items-center justify-between gap-4 flex-wrap">

            <div>
              <h3 className="text-lg font-bold text-white">
                🔗 Common Languages
              </h3>

              <p className="text-slate-400 text-sm mt-1">
                Languages used by both GitHub users.
              </p>
            </div>

            <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-lg font-semibold">
              {commonLanguages.length}
            </span>

          </div>


          {commonLanguages.length > 0 ? (
            <div className="flex flex-wrap gap-2 mt-5">

              {commonLanguages.map((language) => (
                <span
                  key={language}
                  className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-2 rounded-lg text-sm font-medium"
                >
                  ✓ {language}
                </span>
              ))}

            </div>
          ) : (
            <p className="text-slate-500 mt-5">
              No common programming languages found.
            </p>
          )}

        </div>

      </div>
    </section>
  );
}

export default LanguageComparison;