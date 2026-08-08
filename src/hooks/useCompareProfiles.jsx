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
    try {
      setLoading(true);
      setError("");

     const [
  profileOne,
  profileTwo,
  repositoriesOne,
  repositoriesTwo,
] = await Promise.all([
  getUserProfile(usernameOne),
  getUserProfile(usernameTwo),
  getUserRepositories(usernameOne, 1),
  getUserRepositories(usernameTwo, 1),
]);

      setFirstProfile(profileOne);
      setSecondProfile(profileTwo);

      setFirstRepositories(repositoriesOne);

      setSecondRepositories(repositoriesTwo);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to compare users."
      );

      setFirstProfile(null);
      setSecondProfile(null);

      setFirstRepositories([]);

setSecondRepositories([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    firstProfile,
    secondProfile,
    loading,
    error,
    compareProfiles,
    firstRepositories,

secondRepositories,
  };
}

export default useCompareProfiles;