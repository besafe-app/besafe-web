/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
export const INITIAL_STATE = {
  isAddingCondition: false,
  isAdded: false,
  maxNum: 3,
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

export const CONDITION_ADD_REQUEST = 'CONDITION_ADD_REQUEST';
export const CONDITION_ADD_SUCCESS = 'CONDITION_ADD_SUCCESS';
export const CONDITION_ADD_FAILURE = 'CONDITION_ADD_FAILURE';
export const CONDITION_DELETE_REQUEST = 'CONDITION_DELETE_REQUEST';
export const CONDITION_DELETE_SUCCESS = 'CONDITION_DELETE_SUCCESS';
export const CONDITION_DELETE_FAILURE = 'CONDITION_DELETE_FAILURE';
export const CONDITION_UPDATE_REQUEST = 'CONDITION_UPDATE_REQUEST';
export const CONDITION_UPDATE_SUCCESS = 'CONDITION_UPDATE_SUCCESS';
export const CONDITION_UPDATE_FAILURE = 'CONDITION_UPDATE_FAILURE';

export const addConditionRequest = (newCondition) => ({
  type: CONDITION_ADD_REQUEST,
  data: newCondition.trim(),
});

export const addConditionSuccess = ({ data }) => ({
  type: CONDITION_ADD_SUCCESS,
  data,
});

export const addConditionFailure = ({ e }) => ({
  type: CONDITION_ADD_FAILURE,
  error: e,
});

export const deleteConditionRequest = (conditionsId) => ({
  type: CONDITION_DELETE_REQUEST,
  data: conditionsId,
});

export const deleteConditionSuccess = ({ data }) => ({
  type: CONDITION_DELETE_SUCCESS,
  data,
});

export const deleteConditionFailure = ({ e }) => ({
  type: CONDITION_DELETE_FAILURE,
  error: e,
});

export const upadteConditionRequest = ({ conditionsId, name }) => ({
  type: CONDITION_UPDATE_REQUEST,
  data: {
    id: conditionsId,
    name,
  },
});

export const updateConditionSuccess = ({ data }) => ({
  type: CONDITION_UPDATE_SUCCESS,
  data,
});

export const updateConditionFailure = ({ e }) => ({
  type: CONDITION_UPDATE_FAILURE,
  error: e,
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONDITION_ADD_REQUEST: {
      return {
        ...state,
        isAddingCondition: true,
        isAdded: false,
      };
    }
    case CONDITION_ADD_SUCCESS: {
      return {
        ...state,
        isAddingCondition: false,
        isAdded: true,
        conditions: [...state.conditions, { id: state.maxNum + 1, name: action.data, isChange: false }],
        maxNum: state.maxNum + 1,
      };
    }
    case CONDITION_ADD_FAILURE: {
      return state;
    }
    case CONDITION_DELETE_REQUEST: {
      return {
        ...state,
      };
    }
    case CONDITION_DELETE_SUCCESS: {
      const conditions = state.conditions.filter((condition) => condition.id !== action.data);
      return {
        ...state,
        conditions,
      };
    }
    case CONDITION_DELETE_FAILURE: {
      return state;
    }
    case CONDITION_UPDATE_REQUEST: {
      return {
        ...state,
      };
    }
    case CONDITION_UPDATE_SUCCESS: {
      const conditions = state.conditions.map((condition) => {
        if (condition.id === action.data.id) {
          condition.name = action.data.name;
          condition.isChange = condition.isChange === 0 ? 1 : 0;
        }
        return condition;
      });
      return {
        ...state,
        conditions,
      };
    }
    case CONDITION_UPDATE_FAILURE: {
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
