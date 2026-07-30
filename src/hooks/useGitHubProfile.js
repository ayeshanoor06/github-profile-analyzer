import { useState } from "react";
import {
  getUserProfile,
  getUserRepositories,
} from "../services/githubApi";

function useGitHubProfile() {
  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchProfile = async (username) => {
    try {
      setLoading(true);
      setError("");

      const profileData = await getUserProfile(username);

const repositoryData = await getUserRepositories(
  username,
  1
);

console.log(repositoryData);

setProfile(profileData);
setRepositories(repositoryData);
setPage(1);
    }
     
    catch (err) {
  console.log("Error:", err);
  console.log("Status:", err.response?.status);
  console.log("URL:", err.config?.url);
  console.log("Data:", err.response?.data);

  alert(
    `Status: ${err.response?.status}\nURL: ${err.config?.url}\nMessage: ${
      err.response?.data?.message || err.message
    }`
  );

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