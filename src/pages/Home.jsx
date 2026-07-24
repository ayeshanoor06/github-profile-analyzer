import { useState } from "react";
import SearchBar from "../components/ui/SearchBar";
import { getUserProfile } from "../services/githubApi";
import ProfileCard from "../components/ui/ProfileCard";
function Home() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);

  const handleSearch = async (searchedUsername) => {
    try {
      const user = await getUserProfile(searchedUsername);

      setUsername(searchedUsername);
      setProfile(user);

      console.log(user);
    } catch (error) {
      console.error(error);
      alert("User not found.");
    }
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
{profile && <ProfileCard profile={profile} />}
    </section>
  );
}

export default Home;