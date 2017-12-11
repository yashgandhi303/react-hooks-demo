import { combineReducers } from 'redux';
import cartItems from './cartItemsReducer';
import storeStock from './storeStockReducer';

const rootReducer = combineReducers({
  cartItems,
  storeStock
});

export default rootReducer;
