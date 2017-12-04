import { combineReducers } from 'redux';
import items from './itemReducer';


const rootReducer = combineReducers({
  items
});

export default rootReducer;
