import { GitRepoItem } from './types';

export enum GitCompanyActionTypes {
  FETCH_REPOS = 'FETCH_REPOS',
  FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS',
  FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE',
}

export interface FetchReposAction {
  type: GitCompanyActionTypes.FETCH_REPOS;
  companyName: string;
}

export interface FetchReposSuccessAction {
  type: GitCompanyActionTypes.FETCH_REPOS_SUCCESS;
  repos: GitRepoItem[];
}

export interface FetchReposFailuresAction {
  type: GitCompanyActionTypes.FETCH_REPOS_FAILURE;
  error: string | undefined;
}

export type GitCompanyActionUnion =
  | FetchReposAction
  | FetchReposSuccessAction
  | FetchReposFailuresAction;
