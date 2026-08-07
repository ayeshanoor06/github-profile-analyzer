import { FaTrophy } from "react-icons/fa";

function WinnerCard({
  firstProfile,
  secondProfile,
}) {
  const metrics = [
    {
      first: firstProfile.followers,
      second: secondProfile.followers,
      title: "Followers",
    },
    {
      first: firstProfile.following,
      second: secondProfile.following,
      title: "Following",
    },
    {
      first: firstProfile.public_repos,
      second: secondProfile.public_repos,
      title: "Repositories",
    },
    {
      first: firstProfile.public_gists,
      second: secondProfile.public_gists,
      title: "Public Gists",
    },
  ];

  let firstScore = 0;
  let secondScore = 0;

  const wins = [];

  metrics.forEach((metric) => {
    if (metric.first > metric.second) {
      firstScore++;
      wins.push({
        winner: firstProfile.login,
        metric: metric.title,
      });
    } else if (metric.second > metric.first) {
      secondScore++;
      wins.push({
        winner: secondProfile.login,
        metric: metric.title,
      });
    }
  });

  let winner = null;

  if (firstScore > secondScore)
    winner = firstProfile;

  if (secondScore > firstScore)
    winner = secondProfile;

  return (
    <section className="mt-10">

      <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl p-8 shadow-xl">

        <div className="flex items-center gap-3">

          <FaTrophy className="text-4xl text-white" />

          <h2 className="text-3xl font-bold text-white">
            Overall Winner
          </h2>

        </div>

        {winner ? (
          <>
            <div className="flex items-center gap-6 mt-8">

              <img
                src={winner.avatar_url}
                alt={winner.login}
                className="w-24 h-24 rounded-full border-4 border-white"
              />

              <div>

                <h3 className="text-4xl font-bold text-white">
                  {winner.name || winner.login}
                </h3>

                <p className="text-white/90 mt-2">
                  @{winner.login}
                </p>

              </div>

            </div>

            <div className="mt-8">

              <h4 className="text-xl text-white font-semibold mb-4">
                Winning Categories
              </h4>

              <ul className="space-y-2">

                {wins
                  .filter(
                    (w) => w.winner === winner.login
                  )
                  .map((item) => (
                    <li
                      key={item.metric}
                      className="text-white"
                    >
                      ✅ {item.metric}
                    </li>
                  ))}

              </ul>

            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-8">

              <div className="bg-white/20 rounded-xl p-5">

                <p className="text-white">
                  {firstProfile.login}
                </p>

                <h2 className="text-4xl text-white font-bold mt-2">
                  {firstScore}
                </h2>

              </div>

              <div className="bg-white/20 rounded-xl p-5">

                <p className="text-white">
                  {secondProfile.login}
                </p>

                <h2 className="text-4xl text-white font-bold mt-2">
                  {secondScore}
                </h2>

              </div>

            </div>

          </>
        ) : (
          <div className="mt-8">

            <h2 className="text-4xl text-white font-bold">
              🤝 It's a Tie
            </h2>

          </div>
        )}

      </div>

    </section>
  );
}

export default WinnerCard;