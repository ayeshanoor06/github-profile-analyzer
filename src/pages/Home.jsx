import SearchBar from "../components/ui/SearchBar";
import ProfileCard from "../components/ui/ProfileCard";
import RepositoryList from "../components/ui/RepositoryList";
import LoadingSpinner from "../components/common/LoadingSpinner";
import useGitHubProfile from "../hooks/useGitHubProfile";
import LanguagePieChart from "../components/charts/LanguagePieChart";
import StarsBarChart from "../components/charts/StarsBarChart";
import RepositoryInsights from "../components/charts/RepositoryInsights";
import CompareSearch from "../components/compare/CompareSearch";
import useCompareProfiles from "../hooks/useCompareProfiles";
import CompareProfileCard from "../components/compare/CompareProfileCard";
import CompareStats from "../components/compare/CompareStats";
import WinnerCard from "../components/compare/WinnerCard";
import RepositoryComparison from "../components/compare/RepositoryComparison";
import LanguageComparison from "../components/compare/LanguageComparison";





function Home() {
  const {
    profile,
    repositories,
    loading,
    error,
    searchProfile,
    loadMoreRepositories,
  } = useGitHubProfile();

 const {
  firstProfile,
  secondProfile,
  firstRepositories,
  secondRepositories,
  loading: compareLoading,
  error: compareError,
  compareProfiles,
} = useCompareProfiles();
  const handleCompare = (
  userOne,
  userTwo
) => {
  compareProfiles(userOne, userTwo);
};

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


      <CompareSearch
  onCompare={handleCompare}
/>

      {compareLoading && (
  <p className="text-blue-500 mt-4">
    Comparing users...
  </p>
)}

{compareError && (
  <p className="text-red-500 mt-4">
    {compareError}
  </p>
)}

{firstProfile && secondProfile && (
  <section className="mt-10">

    <h2 className="text-3xl font-bold text-white text-center mb-8">
      User Comparison
    </h2>

    <div className="grid lg:grid-cols-3 gap-8 items-center">

      <CompareProfileCard
        profile={firstProfile}
      />

      <div className="flex justify-center">

        <div className="bg-blue-600 w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
          VS
        </div>

      </div>

      <CompareProfileCard
        profile={secondProfile}
      />

    </div>

  </section>
)}

{firstProfile && secondProfile && (
  <CompareStats
    firstProfile={firstProfile}
    secondProfile={secondProfile}
  />

  
)}

<WinnerCard
  firstProfile={firstProfile}
  secondProfile={secondProfile}
/>

{firstProfile && secondProfile && (
  <LanguageComparison
    firstRepositories={firstRepositories}
    secondRepositories={secondRepositories}
    firstUsername={firstProfile.login}
    secondUsername={secondProfile.login}
  />
)}

{firstProfile && secondProfile && (
 <RepositoryComparison
  firstRepositories={firstRepositories}
  secondRepositories={secondRepositories}
  firstUsername={firstProfile.login}
  secondUsername={secondProfile.login}
/>
)}

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