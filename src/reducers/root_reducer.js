import { combineReducers } from 'redux';
import itemReducer from './itemReducer';


const rootReducer = combineReducers({
  items: itemReducer
});

export default rootReducer;
