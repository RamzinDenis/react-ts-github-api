import { GitCompanyActionUnion, GitCompanyActionTypes } from './actionTypes';
import { GitCompanyState } from './types';

const initialState: GitCompanyState = {
  companyName: '',
  error: '',
  items: [],
  isLoading: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export default (state = initialState, action: GitCompanyActionUnion): GitCompanyState => {
  switch (action.type) {
    case GitCompanyActionTypes.FETCH_REPOS:
      return { ...state, companyName: action.companyName, isLoading: true };

    case GitCompanyActionTypes.FETCH_REPOS_SUCCESS:
      return { ...state, items: action.repos, isLoading: false, error: null };

    case GitCompanyActionTypes.FETCH_REPOS_FAILURE:
      return { ...state, isLoading: false, error: action.error, items: [] };

    default:
      return state;
  }
};
