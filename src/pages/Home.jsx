import SearchBar from "../components/ui/SearchBar";
import ProfileCard from "../components/ui/ProfileCard";
import useGitHubProfile from "../hooks/useGitHubProfile";
import LoadingSpinner from "../components/common/LoadingSpinner";
function Home() {
  const {
    profile,
    loading,
    error,
    searchProfile,
  } = useGitHubProfile();

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-gray-800">
        Welcome 👋
      </h2>

      <p className="text-gray-600 mt-3">
        Search any GitHub username and analyze repositories,
        languages, stars, forks, and contribution statistics.
      </p>

      <SearchBar onSearch={searchProfile} />

      {loading && <LoadingSpinner />}

      {error && (
        <p className="mt-6 text-red-600">
          {error}
        </p>
      )}

      {profile && <ProfileCard profile={profile} />}
    </section>
  );
}

export default Home;