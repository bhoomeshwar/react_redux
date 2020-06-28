import {applyMiddleware, createStore} from 'redux';
import combineReducers from '../combined-reducers';

function logger({ getState }) {
    return next => action => {
        console.log('will dispatch', action);
        const returnValue = next(action);
        console.log('state after dispatch', getState());
        return returnValue;
    }
}

const store = createStore(combineReducers, applyMiddleware(logger));

export default store;
