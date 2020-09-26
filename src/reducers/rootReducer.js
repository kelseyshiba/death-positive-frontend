import { combineReducers } from 'redux';
import deathReducer from './deathReducer';
import ceremonyReducer from './ceremonyReducer';

const rootReducer = combineReducers({
   deaths: deathReducer, 
   ceremonies: ceremonyReducer})

export default rootReducer;

