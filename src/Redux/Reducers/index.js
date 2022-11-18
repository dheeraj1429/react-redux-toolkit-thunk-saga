import { combineReducers } from 'redux';
import indexReducer from './indexReducer';

const rootReducer = combineReducers({
   index: indexReducer,
});

export default rootReducer;
