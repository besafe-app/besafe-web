import { all } from 'redux-saga/effects';
import * as MapSaga from './mapsSaga';
import * as AuthSaga from './authSaga';
import * as ConditionSaga from './conditionsSaga';

function* Sagas() {
  yield all([
    AuthSaga.watcherSaga(),
    ConditionSaga.watcherSaga(),
    MapSaga.watcherSaga(),
  ]);
}

export default Sagas;
