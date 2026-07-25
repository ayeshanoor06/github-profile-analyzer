import { useState } from "react";
import RepositorySearch from "./RepositorySearch";
import RepositorySort from "./RepositorySort";
import RepoCard from "./RepoCard";

function RepositoryList({ repositories }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("stars");
  const filteredRepositories = repositories
  .filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
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
      <h2 className="text-3xl font-bold mb-6">
        Latest Repositories
      </h2>

      <RepositorySearch
        value={searchTerm}
        onChange={setSearchTerm}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {filteredRepositories.map((repo) => (
          <RepoCard
            key={repo.id}
            repo={repo}
          />
        ))}
      </div>
    </div>
  );
}

export default RepositoryList;