import { useState } from "react";

import RepositorySearch from "./RepositorySearch";
import RepositorySort from "./RepositorySort";
import LanguageFilter from "./LanguageFilter";
import RepositoryStats from "./RepositoryStats";
import RepositoryModal from "./RepositoryModal";
import RepoCard from "./RepoCard";

import useFavorites from "../../hooks/useFavorites";

function RepositoryList({
  repositories,
  onLoadMore,
}) {
  const { favorites, addFavorite } =
    useFavorites();

  const [searchTerm, setSearchTerm] =
    useState("");

  const [sortBy, setSortBy] =
    useState("stars");

  const [selectedLanguage, setSelectedLanguage] =
    useState("all");

  const [selectedRepo, setSelectedRepo] =
    useState(null);

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
          return (
            b.stargazers_count -
            a.stargazers_count
          );

        case "forks":
          return (
            b.forks_count -
            a.forks_count
          );

        case "updated":
          return (
            new Date(b.updated_at) -
            new Date(a.updated_at)
          );

        case "name":
          return a.name.localeCompare(
            b.name
          );

        default:
          return 0;
      }
    });

  return (
    <section className="mt-12">

      <div className="flex items-end justify-between mb-6">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Repository Explorer
          </h2>

          <p className="text-slate-400 mt-2">
            Showing{" "}
            {filteredRepositories.length} repositories
          </p>

        </div>

      </div>

      <RepositoryStats
        repositories={filteredRepositories}
      />

      {/* Controls */}

      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-8">

        <div className="grid lg:grid-cols-3 gap-6">

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

        </div>

      </div>

      {/* Repository Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {filteredRepositories.length ? (
          filteredRepositories.map((repo) => (
            <RepoCard
              key={repo.id}
              repo={repo}
              onFavorite={addFavorite}
              isFavorite={favorites.some(
                (item) =>
                  item.id === repo.id
              )}
              onClick={() =>
                setSelectedRepo(repo)
              }
            />
          ))
        ) : (
          <div className="col-span-full bg-slate-800 border border-slate-700 rounded-2xl p-12 text-center">

            <h3 className="text-white text-xl font-semibold">
              No repositories found
            </h3>

            <p className="text-slate-400 mt-2">
              Try changing the search or filter.
            </p>

          </div>
        )}

      </div>

      {repositories.length > 0 && (
        <div className="flex justify-center mt-10">

          <button
            onClick={onLoadMore}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold text-white transition"
          >
            Load More Repositories
          </button>

        </div>
      )}

      <RepositoryModal
        repo={selectedRepo}
        onClose={() =>
          setSelectedRepo(null)
        }
      />

    </section>
  );
}

export default RepositoryList;