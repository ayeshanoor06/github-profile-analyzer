import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

export const getUserProfile = async (username) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};

export const getUserRepositories = async (username) => {
  const response = await githubApi.get(
    `/users/${username}/repos?sort=updated&per_page=20`
  );

  return response.data;
};