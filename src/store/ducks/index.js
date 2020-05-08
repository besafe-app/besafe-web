import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import conditions from './conditions';

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    conditions,
  });

const Reducers = (history) => appReducer(history);

export default Reducers;
