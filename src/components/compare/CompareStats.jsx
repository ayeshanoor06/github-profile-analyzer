function CompareStats({
  firstProfile,
  secondProfile,
}) {
  const stats = [
    {
      label: "Followers",
      first: firstProfile.followers,
      second: secondProfile.followers,
    },
    {
      label: "Following",
      first: firstProfile.following,
      second: secondProfile.following,
    },
    {
      label: "Repositories",
      first: firstProfile.public_repos,
      second: secondProfile.public_repos,
    },
    {
      label: "Public Gists",
      first: firstProfile.public_gists,
      second: secondProfile.public_gists,
    },
  ];

  return (
    <section className="mt-10 bg-slate-800 border border-slate-700 rounded-2xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        Comparison Results
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700">

              <th className="text-left text-slate-400 pb-4">
                Metric
              </th>

              <th className="text-center text-slate-400 pb-4">
                {firstProfile.login}
              </th>

              <th className="text-center text-slate-400 pb-4">
                {secondProfile.login}
              </th>

              <th className="text-center text-slate-400 pb-4">
                Winner
              </th>

            </tr>

          </thead>

          <tbody>

            {stats.map((stat) => {

              let winner = "Tie";

              if (stat.first > stat.second)
                winner = firstProfile.login;

              if (stat.second > stat.first)
                winner = secondProfile.login;

              return (
                <tr
                  key={stat.label}
                  className="border-b border-slate-700"
                >

                  <td className="py-5 text-white font-medium">
                    {stat.label}
                  </td>

                  <td
                    className={`text-center py-5 ${
                      stat.first > stat.second
                        ? "text-green-400 font-bold"
                        : "text-white"
                    }`}
                  >
                    {stat.first.toLocaleString()}
                  </td>

                  <td
                    className={`text-center py-5 ${
                      stat.second > stat.first
                        ? "text-green-400 font-bold"
                        : "text-white"
                    }`}
                  >
                    {stat.second.toLocaleString()}
                  </td>

                  <td className="text-center py-5 text-yellow-400 font-semibold">
                    {winner === "Tie"
                      ? "🤝 Tie"
                      : `🏆 ${winner}`}
                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default CompareStats;