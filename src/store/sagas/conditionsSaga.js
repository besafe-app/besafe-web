/* eslint-disable import/prefer-default-export */
import {
  delay, takeLatest, put,
} from 'redux-saga/effects';
import { Types } from 'store/ducks/conditionsReducer';
import { POST } from 'utils/constants/verbs';
import { requestAPI } from 'helpers/requestHelpers';
import { CONDITIONS } from 'utils/constants/endpoints';


function* conditionAdd(action) {
  try {
    yield delay(1000);
    yield requestAPI({
      verb: POST,
      endPoint: CONDITIONS,
      data: action,
    });
    yield put({
      type: Types.ADD_CONDITION_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: Types.ADD_CONDITION_FAILURE,
      error: [error],
    });
  }
}

function* conditionUpdate(action) {
  try {
    yield delay(1000);
    yield put({
      type: Types.UPDATE_CONDITION_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: Types.UPDATE_CONDITION_FAILURE,
      errors: [error],
    });
  }
}

function* conditionDelete(action) {
  try {
    yield delay(1000);
    yield put({
      type: Types.DELETE_CONDITION_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: Types.DELETE_CONDITION_FAILURE,
      errors: [error],
    });
  }
}

export function* watcherSaga() {
  yield takeLatest(Types.ADD_CONDITION_REQUEST, conditionAdd);
  yield takeLatest(Types.UPDATE_CONDITION_REQUEST, conditionUpdate);
  yield takeLatest(Types.DELETE_CONDITION_REQUEST, conditionDelete);
}
