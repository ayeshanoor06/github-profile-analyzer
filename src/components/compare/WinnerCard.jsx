function WinnerCard({ firstProfile, secondProfile }) {

  if (!firstProfile || !secondProfile) {
    return null;
  }

  const firstScore =
    firstProfile.followers +
    firstProfile.public_repos +
    firstProfile.public_gists;

  const secondScore =
    secondProfile.followers +
    secondProfile.public_repos +
    secondProfile.public_gists;

  let winner = null;

  if (firstScore > secondScore) {
    winner = firstProfile;
  } else if (secondScore > firstScore) {
    winner = secondProfile;
  }

  return (
    <section className="mt-8">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">

        <h2 className="text-2xl font-bold text-white mb-6">
          🏆 Comparison Winner
        </h2>

        {winner ? (
          <div className="flex flex-col sm:flex-row items-center gap-5">

            <img
              src={winner.avatar_url}
              alt={winner.login}
              className="w-20 h-20 rounded-full border-4 border-blue-500"
            />

            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white">
                {winner.name || winner.login}
              </h3>

              <p className="text-slate-400">
                @{winner.login}
              </p>

              <p className="text-blue-400 font-semibold mt-2">
                Higher overall profile score
              </p>
            </div>

          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-yellow-400 text-lg font-semibold">
              🤝 It's a tie!
            </p>

            <p className="text-slate-400 mt-2">
              Both GitHub profiles have the same score.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default WinnerCard;