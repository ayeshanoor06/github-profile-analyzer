import { useState } from "react";
import { getUserProfile } from "../services/githubApi";

function useCompareProfiles() {
  const [firstProfile, setFirstProfile] = useState(null);
  const [secondProfile, setSecondProfile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const compareProfiles = async (
    usernameOne,
    usernameTwo
  ) => {
    try {
      setLoading(true);
      setError("");

      const [profileOne, profileTwo] =
        await Promise.all([
          getUserProfile(usernameOne),
          getUserProfile(usernameTwo),
        ]);

      setFirstProfile(profileOne);
      setSecondProfile(profileTwo);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to compare users."
      );

      setFirstProfile(null);
      setSecondProfile(null);
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
  };
}

export default useCompareProfiles;