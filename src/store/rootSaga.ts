import { all, call } from 'redux-saga/effects';

import { gitCompanySaga } from './git-company/saga';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* rootSaga() {
  yield all([call(gitCompanySaga)]);
}
