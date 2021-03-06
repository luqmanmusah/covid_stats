import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { homeReducer } from './home';

const reducer = combineReducers({
  homeReducer,
});

const store = createStore(
  reducer,

  applyMiddleware(logger, thunk),
);

// store.dispatch(homeReducer());

export default store;
