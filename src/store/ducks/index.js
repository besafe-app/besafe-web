import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import maps from './maps';
import auth from './authReducer';

import conditionsReducer from './conditionsReducer';

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    conditionsReducer,
    maps,
  });

const Reducers = (history) => appReducer(history);

export default Reducers;
