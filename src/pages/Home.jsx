import SearchBar from "../components/ui/SearchBar";
import ProfileCard from "../components/ui/ProfileCard";
import RepositoryList from "../components/ui/RepositoryList";
import LoadingSpinner from "../components/common/LoadingSpinner";
import useGitHubProfile from "../hooks/useGitHubProfile";
import LanguagePieChart from "../components/charts/LanguagePieChart";
import StarsBarChart from "../components/charts/StarsBarChart";
import RepositoryInsights from "../components/charts/RepositoryInsights";




function Home() {
  const {
    profile,
    repositories,
    loading,
    error,
    searchProfile,
    loadMoreRepositories,
  } = useGitHubProfile();

 return (
  <section>
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
        Welcome 👋
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mt-3">
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

      {repositories.length > 0 && (
        <>
          <RepositoryInsights repositories={repositories} />

          <div className="grid lg:grid-cols-2 gap-6">
            <LanguagePieChart repositories={repositories} />
            <StarsBarChart repositories={repositories} />
          </div>

          <RepositoryList
            repositories={repositories}
            onLoadMore={loadMoreRepositories}
          />
        </>
      )}

    </div>
  </section>
);
    
}


export default Home;