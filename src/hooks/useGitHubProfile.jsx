import { useState } from "react";
import { getUserProfile } from "../services/githubApi";

function useGitHubProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchProfile = async (username) => {
    try {
      setLoading(true);
      setError("");

      const data = await getUserProfile(username);

      setProfile(data);
    } catch (err) {
      setProfile(null);
      setError("GitHub user not found.");
    } finally {
      setLoading(false);
    }
  };

  return {
    profile,
    loading,
    error,
    searchProfile,
  };
}

export default useGitHubProfile;