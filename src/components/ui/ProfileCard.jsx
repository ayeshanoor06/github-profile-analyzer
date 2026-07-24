function ProfileCard({ profile }) {
  return (
    <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-6">
        <img
          src={profile.avatar_url}
          alt={profile.login}
          className="w-28 h-28 rounded-full border"
        />

        <div>
          <h2 className="text-2xl font-bold">
            {profile.name || profile.login}
          </h2>

          <p className="text-gray-600">
            @{profile.login}
          </p>

          {profile.bio && (
            <p className="mt-3 text-gray-700">
              {profile.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;