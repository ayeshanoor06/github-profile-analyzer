import { useState } from "react";
import RepositorySearch from "./RepositorySearch";
import RepoCard from "./RepoCard";

function RepositoryList({ repositories }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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