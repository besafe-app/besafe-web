/* eslint-disable max-len */
import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addConditionRequest: ['name', 'newCondition'],
  addConditionSuccess: ['data'],
  addConditionFailure: ['errors'],
  deleteConditionRequest: ['conditionId'],
  deleteConditionSuccess: ['data'],
  deleteConditionFailure: ['errors'],
  updateConditionRequest: ['conditionId', 'name'],
  updateConditionSuccess: ['data'],
  updateConditionFailure: ['errors'],
});

const INITIAL_STATE = {
  isAddingCondition: false,
  isAdded: false,
  maxNum: 3,
  data: {},
  errors: [],
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
  conditions: [...state.conditions, {
    id: state.maxNum + 1, name: action.data, isChange: false,
  }],
});

const addConditionFailure = (state = INITIAL_STATE, errors) => ({
  state,
  errors,
});

const deleteConditionRequest = (state = INITIAL_STATE) => ({
  ...state,
});

const deleteConditionSuccess = (state = INITIAL_STATE, action) => {
  const conditions = state.conditions.filter((c) => c.id !== action.data);
  return {
    ...state,
    conditions,
  };
};

const deleteConditionFailure = (state = INITIAL_STATE, errors) => ({
  state,
  errors,
});

const updateConditionRequest = (state = INITIAL_STATE) => ({
  ...state,
});

const updateConditionSuccess = (state = INITIAL_STATE, action) => {
  const conditions = state.conditions.map((c) => {
    if (c.id === action.data.id) {
      c.name = action.data.name;
      c.isChange = c.isChange === 0 ? 1 : 0;
    }
    return c;
  });
  return {
    ...state,
    conditions,
  };
};

const updateConditionFailure = (state = INITIAL_STATE, errors) => ({
  state,
  errors,
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
