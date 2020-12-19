import { createSelector } from 'reselect';

import { RootState } from '../rootReducer';
import { GitCompanyState } from './types';

const getCompanyState = (state: RootState): GitCompanyState => {
  return state.gitCompany;
};

export const getCompanyRepositories = createSelector(getCompanyState, (company) => company.items);

export const getCompanyLoadingState = createSelector(
  getCompanyState,
  (company) => company.isLoading
);
