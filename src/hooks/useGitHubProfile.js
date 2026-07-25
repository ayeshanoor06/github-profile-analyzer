import { useState } from "react";
import {
  getUserProfile,
  getUserRepositories,
} from "../services/githubApi";

function useGitHubProfile() {
  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchProfile = async (username) => {
    try {
      setLoading(true);
      setError("");

      const profileData = await getUserProfile(username);

const repositoryData = await getUserRepositories(username);

console.log(repositoryData);

setProfile(profileData);
setRepositories(repositoryData);
    }
     catch (err) {
  console.error("FULL ERROR:", err);
  console.error("RESPONSE:", err.response);
  console.error("MESSAGE:", err.message);

  setProfile(null);
  setRepositories([]);
  setError("GitHub user not found.");
}
    finally {
      setLoading(false);
    }
  };

  return {
    profile,
    repositories,
    loading,
    error,
    searchProfile,
  };
}

export default useGitHubProfile;