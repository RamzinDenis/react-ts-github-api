import { combineReducers } from 'redux';

import gitCompanyReducer from './git-company/reducer';

const rootReducer = combineReducers({
  gitCompany: gitCompanyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
