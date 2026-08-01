import axios from "axios";
console.log(import.meta.env.VITE_GITHUB_TOKEN);
const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

export const getUserProfile = async (username) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};

export const getUserRepositories = async (
  username,
  page = 1
) => {
  const response = await githubApi.get(
    `/users/${username}/repos?sort=updated&per_page=20&page=${page}`
  );

  return response.data;
};