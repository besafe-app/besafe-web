/* eslint-disable max-len */
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addConditionRequest: ['name', 'data'],
  addConditionSuccess: ['data'],
  addConditionFailure: ['e', 'error'],
  deleteConditionRequest: ['condition', 'data'],
  deleteConditionSuccess: ['data'],
  deleteConditionFailure: ['e', 'error'],
  updateConditionRequest: ['condition', 'name', 'data'],
  updateConditionSuccess: ['data'],
  updateConditionFailure: ['e', 'error'],
});

const INITIAL_STATE = {
  conditions: [
    {
      id: 1,
      name: 'Tosse seca',
      isChange: 0,
    },
    {
      id: 2,
      name: 'Febre',
      isChange: 0,
    },
    {
      id: 3,
      name: 'Asma',
      isChange: 0,
    },
  ],
  isAddingCondition: false,
  isAdded: false,
};


const addConditionRequest = (state = INITIAL_STATE, action) => ({
  ...state,
  name: action.name,
  isAddingCondition: true,
  isAdded: false,
});

const addConditionSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isAddingCondition: false,
  isAdded: true,
  conditions: [...state.condition, {
    id: Math.random(), name: action.data, isChange: false,
  }],
});

const addConditionFailure = (state = INITIAL_STATE, error) => ({
  state,
  error,
});

const deleteConditionRequest = (state = INITIAL_STATE) => ({
  ...state,
});

const deleteConditionSuccess = (state = INITIAL_STATE, action) => state.filter((condition) => condition.id !== action.data);

const deleteConditionFailure = (state = INITIAL_STATE, error) => ({
  state,
  error,
});

const updateConditionRequest = (state = INITIAL_STATE) => ({
  ...state,
});

const updateConditionSuccess = (state = INITIAL_STATE, action, conditions) => [...state, conditions,
  state.map((condition) => {
    if (condition.id === action.data.id) {
      condition.name = action.data.name;
      condition.isChange = condition.isChange === 0 ? 1 : 0;
    }
    return condition;
  })];

const updateConditionFailure = (state = INITIAL_STATE, error) => ({
  state,
  error,
});

export default createReducer(INITIAL_STATE, {
  [Types.ADD_CONDITION_REQUEST]: addConditionRequest,
  [Types.ADD_CONDITION_SUCCESS]: addConditionSuccess,
  [Types.ADD_CONDITION_FAILURE]: addConditionFailure,
  [Types.DELETE_CONDITION_REQUEST]: deleteConditionRequest,
  [Types.DELETE_CONDITION_SUCCESS]: deleteConditionSuccess,
  [Types.DELETE_CONDITION_FAILURE]: deleteConditionFailure,
  [Types.UPDATE_CONDITION_REQUEST]: updateConditionRequest,
  [Types.UPDATE_CONDITION_SUCCESS]: updateConditionSuccess,
  [Types.UPDATE_CONDITION_FAILURE]: updateConditionFailure,
});
