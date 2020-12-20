import { createSelector } from 'reselect';

import { RootState } from '../rootReducer';
import { GitCompanyState } from './types';

const getCompanyState = (state: RootState): GitCompanyState => {
  return state.gitCompany;
};

const getRepositoryId = (_: RootState, id: string) => id;

export const getCompanyRepositoriesSelector = createSelector(
  getCompanyState,
  (company) => company.items
);

export const getCompanyLoadingStateSelector = createSelector(
  getCompanyState,
  (company) => company.isLoading
);

export const getCompanyNameSelector = createSelector(
  getCompanyState,
  (company) => company.companyName
);

export const getRepositoryByIdSelector = createSelector(
  getCompanyRepositoriesSelector,
  getRepositoryId,
  (repositories, id) => {
    return repositories.find((repo) => +repo.id === +id);
  }
);
