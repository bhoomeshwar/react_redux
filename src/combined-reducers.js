import {combineReducers} from 'redux';
import reddyReducer from './dux/reddy-reducer';
import rakeshReducer from './dux/rakesh-reducer';

export default combineReducers({
    reddyState: reddyReducer,
    rakeshState: rakeshReducer
});
