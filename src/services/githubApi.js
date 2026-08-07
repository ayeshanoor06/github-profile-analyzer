import axios from "axios";

const token = import.meta.env.VITE_GITHUB_TOKEN?.trim();

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: token
    ? {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      }
    : {},
});

export const getUserProfile = async (username) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};

export const getUserRepositories = async (username, page = 1) => {
  const response = await githubApi.get(
    `/users/${username}/repos`,
    {
      params: {
        sort: "updated",
        per_page: 20,
        page,
      },
    }
  );

  return response.data;
};