import { useState } from "react";

import RepositorySearch from "./RepositorySearch";
import RepositorySort from "./RepositorySort";
import LanguageFilter from "./LanguageFilter";
import RepoCard from "./RepoCard";
import RepositoryStats from "./RepositoryStats";
import RepositoryModal from "./RepositoryModal";


  function RepositoryList({
  repositories,
  onLoadMore,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("stars");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedRepo, setSelectedRepo] = useState(null);

  // ✅ Move this INSIDE the component
  const languages = [
    ...new Set(
      repositories
        .map((repo) => repo.language)
        .filter(Boolean)
    ),
  ].sort();

  const filteredRepositories = repositories
    .filter((repo) => {
      const matchesSearch = repo.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesLanguage =
        selectedLanguage === "all"
          ? true
          : repo.language === selectedLanguage;

      return matchesSearch && matchesLanguage;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "stars":
          return b.stargazers_count - a.stargazers_count;

        case "forks":
          return b.forks_count - a.forks_count;

        case "updated":
          return (
            new Date(b.updated_at) -
            new Date(a.updated_at)
          );

        case "name":
          return a.name.localeCompare(b.name);

        default:
          return 0;
      }
    });

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold mb-2">
        Latest Repositories
      </h2>

      <p className="text-gray-500 mb-4">
        {filteredRepositories.length} repositories found
      </p>

      <RepositoryStats
        repositories={filteredRepositories}
      />

      <RepositorySearch
        value={searchTerm}
        onChange={setSearchTerm}
      />

      <RepositorySort
        value={sortBy}
        onChange={setSortBy}
      />

      <LanguageFilter
        languages={languages}
        value={selectedLanguage}
        onChange={setSelectedLanguage}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {filteredRepositories.length > 0 ? (
          filteredRepositories.map((repo) => (
          
            <div
  key={repo.id}
  onClick={() => setSelectedRepo(repo)}
  className="cursor-pointer transition-transform hover:scale-[1.02]"
>
              <RepoCard repo={repo} />
             </div>
          ))
        ) : (
          <p className="text-center col-span-2 text-gray-500">
            No repositories found.
          </p>
        )}
      </div>

      <div className="flex justify-center mt-8">
  <button
    onClick={onLoadMore}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
  >
    Load More
  </button>
</div>
      <RepositoryModal
  repo={selectedRepo}
  onClose={() => setSelectedRepo(null)}
/>
    </div>
  );
}

export default RepositoryList;