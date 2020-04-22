/* eslint-disable import/prefer-default-export */
import { takeLatest, put } from 'redux-saga/effects';
import {
  ADD_CONDITION_REQUEST,
  UPDATE_CONDITION_REQUEST,
  DELETE_CONDITION_REQUEST,
  REQUEST_CONDITION,
  addConditionSuccess,
  addConditionFailure,
  updateConditionSuccess,
  updateConditionFailure,
  deleteConditionSuccess,
  deleteConditionFailure,
  successCondition,
  failureCondition,
} from 'store/ducks/conditionsReducer';
import { POST, DELETE, GET } from 'utils/constants/verbs';
import { requestAPI } from 'helpers/requestHelpers';
import {
  CONDITIONS_CREATE,
  CONDITIONS_UPDATE,
  CONDITIONS_DELETE,
  GET_CONDITION,
} from 'utils/constants/endpoints';

function* addCondition(action) {
  try {
    yield requestAPI({
      verb: POST,
      endPoint: CONDITIONS_CREATE,
      data: {
        name: action.data,
      },
    });
    yield put(addConditionSuccess({ data: action.data }));
  } catch (e) {
    yield put(addConditionFailure({ e }));
  }
}

function* updateCondition(action) {
  try {
    yield requestAPI({
      verb: POST,
      endPoint: CONDITIONS_UPDATE,
      data: {
        id: action.data,
        name: action.data,
      },
    });
    yield put(updateConditionSuccess({ data: action.data }));
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

function* getCondition() {
  try {
    const response = yield requestAPI({
      verb: GET,
      endPoint: GET_CONDITION,
    });
    yield put(successCondition({ conditions: response }));
  } catch (error) {
    yield put(failureCondition({ error }));
  }
}

export function* watcherSaga() {
  yield takeLatest(ADD_CONDITION_REQUEST, addCondition);
  yield takeLatest(UPDATE_CONDITION_REQUEST, updateCondition);
  yield takeLatest(DELETE_CONDITION_REQUEST, deleteCondition);
  yield takeLatest(REQUEST_CONDITION, getCondition);
}
