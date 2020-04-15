export const ADD_CONDITION_REQUEST = 'ADD_CONDITION_REQUEST';
export const ADD_CONDITION_SUCCESS = 'ADD_CONDITION_SUCCESS';
export const ADD_CONDITION_FAILURE = 'ADD_CONDITION_FAILURE';
export const UPDATE_CONDITION_REQUEST = 'UPDATE_CONDITION_REQUEST';
export const UPDATE_CONDITION_SUCCESS = 'UPDATE_CONDITION_SUCCESS';
export const UPDATE_CONDITION_FAILURE = 'UPDATE_CONDITION_FAILURE';
export const DELETE_CONDITION_REQUEST = 'DELTE_CONDITION_REQUEST';
export const DELETE_CONDITION_SUCCESS = 'DELTE_CONDITION_SUCCESS';
export const DELETE_CONDITION_FAILURE = 'DELTE_CONDITION_FAILURE';

export const INITIAL_STATE = {
  isAddingCondition: false,
  isAdded: false,
  maxNum: 3,
  conditions: [
    {
      id: 1,
      name: 'Asma',
      canBeChange: false,
    },
    {
      id: 2,
      name: 'Câncer',
      canBeChange: false,
    },
    {
      id: 3,
      name: 'Diabetes',
      canBeChange: false,
    },
    {
      id: 4,
      name: 'Doença cardiovascular',
      canBeChange: false,
    },
  ],
};

export const addConditionRequest = (newCondition) => ({
  type: ADD_CONDITION_REQUEST,
  data: newCondition.trim(),
});

export const addConditionSuccess = ({ data }) => ({
  type: ADD_CONDITION_SUCCESS,
  data,
});

export const addConditionFailure = ({ e }) => ({
  type: ADD_CONDITION_FAILURE,
  error: e,
});


export const deleteConditionRequest = (conditionsId) => ({
  type: DELETE_CONDITION_REQUEST,
  data: conditionsId,
});

export const deleteConditionSuccess = ({ data }) => ({
  type: DELETE_CONDITION_SUCCESS,
  data,
});

export const deleteConditionFailure = ({ e }) => ({
  type: DELETE_CONDITION_FAILURE,
  error: e,
});

export const upadteConditionRequest = ({ conditionsId, name }) => ({
  type: UPDATE_CONDITION_REQUEST,
  data: {
    id: conditionsId,
    name,
  },
});

export const updateConditionSuccess = ({ data }) => ({
  type: UPDATE_CONDITION_SUCCESS,
  data,
});

export const updateConditionFailure = ({ e }) => ({
  type: UPDATE_CONDITION_FAILURE,
  error: e,
});


const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONDITION_REQUEST: {
      return {
        ...state,
        isAddingCondition: true,
        isAdded: false,
      };
    }
    case ADD_CONDITION_SUCCESS: {
      return {
        ...state,
        isAddingCondition: false,
        isAdded: true,
        conditions: [...state.conditions, { id: state.maxNum + 1, name: action.data, canBeChange: false }],
        maxNum: state.maxNum + 1,
      };
    }
    case ADD_CONDITION_FAILURE: {
      return state;
    }
    case UPDATE_CONDITION_REQUEST: {
      return {
        ...state,
      };
    }
    case UPDATE_CONDITION_SUCCESS: {
      const conditions = state.conditions.map((c) => {
        if (c.id === action.data.id) {
          c.name = action.data.name;
          c.canBeChange = !c.canBeChange;
        }
        return c;
      });
      return {
        ...state,
        conditions,
      };
    }
    case UPDATE_CONDITION_FAILURE: {
      return state;
    }
    case DELETE_CONDITION_REQUEST: {
      return {
        ...state,
      };
    }
    case DELETE_CONDITION_SUCCESS: {
      const conditions = state.conditions.filter((c) => c.id !== action.data);
      return {
        ...state,
        conditions,
      };
    }
    case DELETE_CONDITION_FAILURE: {
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
