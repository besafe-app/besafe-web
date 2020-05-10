export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const SUCCESS_PROFILE = 'SUCCESS_PROFILE';
export const FAILURE_PROFILE = 'FAILURE_PROFILE';

export const INITIAL_STATE = {
  users: [],
  loading: false,
  error: false,
};

export const requestProfile = () => ({
  type: REQUEST_PROFILE,
});

export const successProfile = (users) => ({
  type: SUCCESS_PROFILE,
  data: users,
});

export const failureProfile = ({ e }) => ({
  type: FAILURE_PROFILE,
  error: e,
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_PROFILE: {
      return { ...state, loading: true };
    }
    case SUCCESS_PROFILE: {
      return {
        users: action.data.users,
        loading: false,
        error: false,
      };
    }
    case FAILURE_PROFILE: {
      return { users: [], loading: false, error: true };
    }
    default:
      return state;
  }
};

export default reducer;
