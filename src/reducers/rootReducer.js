import { combineReducers } from 'redux';
import deathReducer from './deathReducer';
import ceremonyReducer from './ceremonyReducer';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
   deaths: deathReducer, 
   ceremonies: ceremonyReducer,
   contacts: contactReducer})

export default rootReducer;

