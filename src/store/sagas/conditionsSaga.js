/* eslint-disable import/prefer-default-export */
import {
  delay, takeLatest, put,
} from 'redux-saga/effects';
import * as Types from 'store/ducks/conditionsReducer';
import {
  addConditionSuccess,
  addConditionFailure,
  updateConditionSuccess,
  updateConditionFailure,
  deleteConditionRequest,
  deleteConditionSuccess,
  deleteConditionFailure,
} from 'store/ducks/conditionsReducer';

function* addCondition(action) {
  try {
    yield delay(1000);
    yield put(addConditionSuccess({ data: action.data }));
  } catch (e) {
    yield put(addConditionFailure({ e }));
    console.error(e);
  }
}

function* updateCondition(action) {
  try {
    yield delay(1000);
    yield put(updateConditionSuccess({ data: action.data }));
  } catch (e) {
    yield put(updateConditionFailure({ e }));
    console.error(e);
  }
}

function* deleteCondition(action) {
  try {
    yield delay(1000);
    yield put(deleteConditionSuccess({ data: action.data }));
  } catch (e) {
    yield put(deleteConditionFailure({ e }));
    console.error(e);
  }
}

export function* watcherSaga() {
  yield takeLatest(Types.CONDITION_ADD_REQUEST, addCondition);
  yield takeLatest(Types.CONDITION_UPDATE_REQUEST, updateCondition);
  yield takeLatest(Types.CONDITION_DELETE_REQUEST, deleteCondition);
}
