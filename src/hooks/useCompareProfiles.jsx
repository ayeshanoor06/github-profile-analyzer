import { useState } from "react";
import {
  getUserProfile,
  getUserRepositories,
} from "../services/githubApi";

function useCompareProfiles() {
  const [firstProfile, setFirstProfile] = useState(null);
  const [secondProfile, setSecondProfile] = useState(null);

  const [firstRepositories, setFirstRepositories] =
    useState([]);

  const [secondRepositories, setSecondRepositories] =
    useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const compareProfiles = async (
    usernameOne,
    usernameTwo
  ) => {
    const firstUsername = usernameOne.trim();
    const secondUsername = usernameTwo.trim();

    if (!firstUsername || !secondUsername) {
      setError("Please enter both GitHub usernames.");
      return;
    }

    if (
      firstUsername.toLowerCase() ===
      secondUsername.toLowerCase()
    ) {
      setError("Please enter two different GitHub usernames.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // --------------------------------------------------
      // STEP 1: Fetch both profiles
      // --------------------------------------------------

      const profileOne =
        await getUserProfile(firstUsername);

      const profileTwo =
        await getUserProfile(secondUsername);

      // --------------------------------------------------
      // STEP 2: Fetch repositories
      // --------------------------------------------------

      const repositoriesOne =
        await getUserRepositories(
          firstUsername,
          1
        );

      const repositoriesTwo =
        await getUserRepositories(
          secondUsername,
          1
        );

      // --------------------------------------------------
      // STEP 3: Save results
      // --------------------------------------------------

      setFirstProfile(profileOne);
      setSecondProfile(profileTwo);

      setFirstRepositories(
        repositoriesOne || []
      );

      setSecondRepositories(
        repositoriesTwo || []
      );

    } catch (err) {
      console.error(
        "Comparison error:",
        err
      );

      console.error(
        "Status:",
        err.response?.status
      );

      console.error(
        "Message:",
        err.response?.data?.message ||
          err.message
      );

      console.error(
        "URL:",
        err.config?.url
      );

      // Reset comparison data
      setFirstProfile(null);
      setSecondProfile(null);

      setFirstRepositories([]);
      setSecondRepositories([]);

      // Give a more useful error
      if (err.response?.status === 401) {
        setError(
          "GitHub authentication failed. Please check your GitHub token."
        );
      } else if (err.response?.status === 403) {
        setError(
          "GitHub API rate limit exceeded. Please wait and try again."
        );
      } else if (err.response?.status === 404) {
        setError(
          "One of the GitHub users could not be found."
        );
      } else if (!err.response) {
        setError(
          "Network error. Please check your internet connection and try again."
        );
      } else {
        setError(
          err.response?.data?.message ||
            "Unable to compare users."
        );
      }

    } finally {
      setLoading(false);
    }
  };

  return {
    firstProfile,
    secondProfile,

    firstRepositories,
    secondRepositories,

    loading,
    error,

    compareProfiles,
  };
}

export default useCompareProfiles;