/* eslint-disable import/prefer-default-export */
import {
  takeLatest, put,
} from 'redux-saga/effects';
import {
  ADD_CONDITION_REQUEST,
  UPDATE_CONDITION_REQUEST,
  DELETE_CONDITION_REQUEST,
  addConditionSuccess,
  addConditionFailure,
  updateConditionSuccess,
  updateConditionFailure,
  deleteConditionSuccess,
  deleteConditionFailure,
} from 'store/ducks/conditionsReducer';
import { POST, DELETE } from 'utils/constants/verbs';
import { requestAPI } from 'helpers/requestHelpers';
import { CONDITIONS_CREATE, CONDITIONS_UPDATE, CONDITIONS_DELETE } from 'utils/constants/endpoints';

function* addCondition(action) {
  try {
    debugger;
    yield requestAPI({
      verb: POST,
      endPoint: CONDITIONS_CREATE,
      data: action,
    });
    yield put(addConditionSuccess({ data: action.data }));
    console.log(addConditionSuccess());
  } catch (e) {
    yield put(addConditionFailure({ e }));
  }
}

function* updateCondition(action) {
  try {
    debugger;
    yield requestAPI({
      verb: POST,
      endPoint: CONDITIONS_UPDATE,
      data: action,
    });
    yield put(updateConditionSuccess({ data: action.data }));
    console.log(updateConditionSuccess());
  } catch (e) {
    yield put(updateConditionFailure({ e }));
  }
}

function* deleteCondition(action) {
  try {
    yield requestAPI({
      verb: DELETE,
      endPoint: CONDITIONS_DELETE,
      data: action,
    });
    yield put(deleteConditionSuccess({ data: action.data }));
  } catch (e) {
    yield put(deleteConditionFailure({ e }));
  }
}

export function* watcherSaga() {
  yield takeLatest(ADD_CONDITION_REQUEST, addCondition);
  yield takeLatest(UPDATE_CONDITION_REQUEST, updateCondition);
  yield takeLatest(DELETE_CONDITION_REQUEST, deleteCondition);
}