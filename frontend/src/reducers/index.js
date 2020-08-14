import routeReducer from "./route";
import {combineReducers} from 'redux';
import authReducer from './auth';

const allReducers = combineReducers({
    route:routeReducer,
    auth:authReducer,
});

export default allReducers;