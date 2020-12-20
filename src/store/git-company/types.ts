export interface GitCompanyState {
  companyName: string;
  items: GitRepoItem[];
  isLoading: boolean;
  error: string | null | undefined;
}

export interface GitRepoItem {
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  git_url: string;
  name: string;
  id: number;
}
