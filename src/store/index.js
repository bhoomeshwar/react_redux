import {applyMiddleware, createStore} from 'redux';
import combineReducers from '../combined-reducers';
import logger from 'redux-logger';

const store = createStore(combineReducers, applyMiddleware(logger));

export default store;
