import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { api } from '../../pages/services/api';
import { fetchReposFailure, fetchReposSuccess } from './actions';
import {
  FetchReposAction,
  FetchReposFailuresAction,
  FetchReposSuccessAction,
  GitCompanyActionTypes,
} from './actionTypes';
import { GitRepoItem } from './types';

function* fetchRepoWorker(action: FetchReposAction): SagaIterator {
  try {
    const response: { data: GitRepoItem[] } = yield call(api.fetchRepos, action.companyName);
    yield put<FetchReposSuccessAction>(fetchReposSuccess(response.data));
  } catch (err) {
    yield put<FetchReposFailuresAction>(fetchReposFailure(err.toString()));
  }
}

function* fetchRepoSaga() {
  yield takeLatest(GitCompanyActionTypes.FETCH_REPOS, fetchRepoWorker);
}

export function* gitCompanySaga(): SagaIterator<void> {
  yield all([call(fetchRepoSaga)]);
}
