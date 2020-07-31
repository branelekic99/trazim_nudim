// ovde ide import novog reducera
import testReducer from './test'
import {combineReducers} from 'redux';
import authReducer from './auth';

const allReducers = combineReducers({
    test:testReducer,
    auth:authReducer,
});

export default allReducers;