import { takeLatest, put } from 'redux-saga/effects';
import {
  REQUEST_PROFILE,
  successProfile,
  failureProfile,
} from 'store/ducks/profile';
import { GET } from 'utils/constants/verbs';
import { requestAPI } from 'helpers/requestHelpers';
import {
  GET_PROFILE,
} from 'utils/constants/endpoints';

function* getProfile() {
  try {
    const response = yield requestAPI({
      verb: GET,
      endPoint: GET_PROFILE,
    });
    yield put(successProfile({ users: response }));
  } catch (error) {
    yield put(failureProfile({ error }));
  }
}

export function* watcherSaga() {
  yield takeLatest(REQUEST_PROFILE, getProfile);
}
