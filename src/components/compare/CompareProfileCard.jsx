function CompareProfileCard({ profile }) {
  if (!profile) return null;

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">

      <div className="flex flex-col items-center">

        <img
          src={profile.avatar_url}
          alt={profile.login}
          className="w-28 h-28 rounded-full border-4 border-slate-600"
        />

        <h2 className="text-2xl font-bold text-white mt-4">
          {profile.name || profile.login}
        </h2>

        <p className="text-slate-400">
          @{profile.login}
        </p>

        {profile.bio && (
          <p className="text-slate-300 text-center mt-4">
            {profile.bio}
          </p>
        )}

      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <Stat
          title="Followers"
          value={profile.followers}
        />

        <Stat
          title="Following"
          value={profile.following}
        />

        <Stat
          title="Repositories"
          value={profile.public_repos}
        />

        <Stat
          title="Gists"
          value={profile.public_gists}
        />

      </div>

    </div>
  );
}

function Stat({
  title,
  value,
}) {
  return (
    <div className="bg-slate-900 rounded-xl p-4 text-center">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h3 className="text-white text-2xl font-bold mt-2">
        {value.toLocaleString()}
      </h3>

    </div>
  );
}

export default CompareProfileCard;