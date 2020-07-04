import {applyMiddleware, createStore} from 'redux';
import combineReducers from '../combined-reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(combineReducers, applyMiddleware(logger, thunk));

export default store;
