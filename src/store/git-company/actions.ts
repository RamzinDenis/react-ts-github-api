import {
  FetchReposAction,
  FetchReposSuccessAction,
  FetchReposFailuresAction,
  GitCompanyActionTypes,
} from './actionTypes';
import { GitRepoItem } from './types';

export const fetchRepos = (companyName: string): FetchReposAction => ({
  type: GitCompanyActionTypes.FETCH_REPOS,
  companyName,
});

export const fetchReposSuccess = (repos: GitRepoItem[]): FetchReposSuccessAction => ({
  type: GitCompanyActionTypes.FETCH_REPOS_SUCCESS,
  repos,
});

export const fetchReposFailure = (error: string): FetchReposFailuresAction => ({
  type: GitCompanyActionTypes.FETCH_REPOS_FAILURE,
  error,
});
