import { all } from 'redux-saga/effects';
import * as AuthSaga from './authSaga';
import * as ConditionSaga from './conditionsSaga';
import * as ProfileSaga from './profileSaga';

function* Sagas() {
  yield all([
    AuthSaga.watcherSaga(),
    ConditionSaga.watcherSaga(),
    ProfileSaga.watcherSaga(),

  ]);
}

export default Sagas;
