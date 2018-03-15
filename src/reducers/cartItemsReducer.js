import { combineReducers } from 'redux';
import omit from 'lodash/omit';
import {
  // ADD_TO_CART,
  ADD_ITEM_TO_CART,
  REMOVE_FROM_CART,
  BUY_ITEMS,
  UPDATE_ITEM_AMT
} from '../actions/actionTypes';


const cartItemStock = (state = {}, action) => {
  switch(action.type) {
    case ADD_ITEM_TO_CART:
      // add to the item in cart if it's already in there
      if (state.hasOwnProperty(action.id)) {
        const newCartAmt = action.amt + state[action.id].amt;
        return {
          ...state,
          [action.id]: {
            id: action.id,
            name: action.name,
            amt: newCartAmt,
            stock: action.stock
          }
        }
      }
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          amt: action.amt,
          stock: action.stock
        }
      };
    case UPDATE_ITEM_AMT:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          amt: action.amt,
          stock: action.stock
        }
      };
    case REMOVE_FROM_CART:
      const cartItems = state;
      const id = action.id;
      const newState = omit(cartItems, id);
      
      return {
        ...newState
      }
    case BUY_ITEMS:
      // returns default state (after purchasing)
      return {};
    default:
      return state;
  }
}

const cartItemIds = (state = [], action) => {
  switch(action.type) {
    case ADD_ITEM_TO_CART:
      if (state.includes(action.id)) {
        return state;
      }
      return [...state, action.id];
    case REMOVE_FROM_CART:
      return state.filter((id) => id !== action.id);
    case BUY_ITEMS:
      // returns default state (after purchasing)
      return [];
    default:
      return state;
  }
}

const cartItems = combineReducers({
  cartItemStock,
  cartItemIds,
})

export default cartItems;