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

      const [profileData, repositoryData] = await Promise.all([
        getUserProfile(username),
        getUserRepositories(username),
      ]);

      setProfile(profileData);
      setRepositories(repositoryData);
    } catch (err) {
      setProfile(null);
      setRepositories([]);
      setError("GitHub user not found.");
    } finally {
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