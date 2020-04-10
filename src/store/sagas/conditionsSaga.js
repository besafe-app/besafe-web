/* eslint-disable import/prefer-default-export */
import {
  delay, takeLatest, put,
} from 'redux-saga/effects';
import { Types } from 'store/ducks/conditionsReducer';
import { POST } from 'utils/constants/verbs';
import { requestAPI } from 'helpers/requestHelpers';
import { CONDITIONS } from 'utils/constants/endpoints';


function* addCondition(action) {
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
  } catch (errors) {
    yield put({
      type: Types.ADD_CONDITION_FAILURE,
      error: [errors],
    });
  }
}

function* updateCondition(action) {
  try {
    yield delay(1000);
    yield put({
      type: Types.UPDATE_CONDITION_SUCCESS,
      data: action.data,
    });
  } catch (errors) {
    yield put({
      type: Types.UPDATE_CONDITION_FAILURE,
      errors: [errors],
    });
  }
}

function* deleteCondition(action) {
  try {
    yield delay(1000);
    yield put({
      type: Types.DELETE_CONDITION_SUCCESS,
      data: action.data,
    });
  } catch (errors) {
    yield put({
      type: Types.DELETE_CONDITION_FAILURE,
      errors: [errors],
    });
  }
}

export function* watcherSaga() {
  yield takeLatest(Types.ADD_CONDITION_REQUEST, addCondition);
  yield takeLatest(Types.UPDATE_CONDITION_REQUEST, updateCondition);
  yield takeLatest(Types.DELETE_CONDITION_REQUEST, deleteCondition);
}
