import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './authReducer';
import conditionsReducer from './conditionsReducer';
import profile from './profile';


const appReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth,
  conditionsReducer,
  profile,
});

const Reducers = (history) => appReducer(history);

export default Reducers;
