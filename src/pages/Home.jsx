import { useState } from "react";
import SearchBar from "../components/ui/SearchBar";

function Home() {
  const [username, setUsername] = useState("");

  const handleSearch = (searchedUsername) => {
    setUsername(searchedUsername);

    console.log("Searching for:", searchedUsername);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-gray-800">
        Welcome 👋
      </h2>

      <p className="text-gray-600 mt-3">
        Search any GitHub username and analyze repositories,
        languages, stars, forks, and contribution statistics.
      </p>

      <SearchBar onSearch={handleSearch} />

      {username && (
        <div className="mt-8 rounded-lg bg-blue-100 border border-blue-300 p-4">
          <p className="text-blue-800">
            Searching for: <strong>{username}</strong>
          </p>
        </div>
      )}
    </section>
  );
}

export default Home;