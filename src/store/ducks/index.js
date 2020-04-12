import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './authReducer';
import conditionsReducer from './conditionsReducer';


const appReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth,
  conditionsReducer,
});

const Reducers = (history) => appReducer(history);

export default Reducers;
