import {
  FaGithub,
  FaUsers,
  FaBook,
  FaMapMarkerAlt,
  FaLink,
  FaBuilding,
} from "react-icons/fa";
import StatsCard from "./StatsCard";

function ProfileCard({ profile }) {
  return (
    <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 h-28" />

      <div className="px-8 pb-8">

        {/* Avatar + Info */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 -mt-14">

            <img
              src={profile.avatar_url}
              alt={profile.login}
              className="w-32 h-32 rounded-full border-4 border-slate-900 shadow-xl"
            />

            <div className="mt-4 sm:mt-14 text-center sm:text-left">

              <h2 className="text-3xl font-bold text-white">
                {profile.name || profile.login}
              </h2>

              <p className="text-blue-400 font-medium">
                @{profile.login}
              </p>

              {profile.bio && (
                <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
                  {profile.bio}
                </p>
              )}

              <div className="flex flex-wrap gap-5 mt-5 text-slate-400 text-sm">

                {profile.company && (
                  <span className="flex items-center gap-2">
                    <FaBuilding />
                    {profile.company}
                  </span>
                )}

                {profile.location && (
                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    {profile.location}
                  </span>
                )}

                {profile.blog && (
                  <a
                    href={profile.blog}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-blue-400 transition"
                  >
                    <FaLink />
                    Website
                  </a>
                )}
              </div>

            </div>
          </div>

          <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 lg:mt-0 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white font-semibold"
          >
            <FaGithub />
            View Profile
          </a>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

          <StatsCard
            title="Followers"
            value={profile.followers.toLocaleString()}
            icon={<FaUsers />}
          />

          <StatsCard
            title="Following"
            value={profile.following.toLocaleString()}
            icon={<FaUsers />}
          />

          <StatsCard
            title="Repositories"
            value={profile.public_repos.toLocaleString()}
            icon={<FaBook />}
          />

          <StatsCard
            title="Public Gists"
            value={profile.public_gists.toLocaleString()}
            icon={<FaGithub />}
          />

        </div>

      </div>

    </div>
  );
}

export default ProfileCard;