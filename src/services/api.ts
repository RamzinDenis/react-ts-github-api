import axios from 'axios';

const gitHubInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 3000,
});

export const api = {
  fetchRepos<T>(companyName: string): Promise<T> {
    return gitHubInstance.get(`/orgs/${companyName}/repos`);
  },
};
