import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

export const getUserProfile = async (username) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};