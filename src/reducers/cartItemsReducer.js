import { combineReducers } from 'redux';
import omit from 'lodash/omit';
import {
  ADD_ITEM_TO_CART,
  REMOVE_FROM_CART,
  BUY_ITEMS,
  UPDATE_ITEM_AMT,
} from '../actions/actionTypes';

const cartItemStock = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      // add to the item in cart if it's already in there
      if (state.hasOwnProperty(action.id)) {
        const newCartAmt = action.amt + state[action.id].amt;
        return {
          ...state,
          [action.id]: {
            amt: newCartAmt,
            description: action.description,
            id: action.id,
            image: action.image,
            name: action.name,
            stock: action.stock
          }
        }
      }
      return {
        ...state,
        [action.id]: {
          amt: action.amt,
          description: action.description,
          id: action.id,
          image: action.image,
          name: action.name,
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
      const newState = omit(state, action.id);
      return {
        ...newState
      };
    case BUY_ITEMS:
      // returns default state (after purchasing)
      return {};
    default:
      return state;
  }
};

const cartItemIds = (state = [], action) => {
  switch (action.type) {
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
};

const cartItems = combineReducers({
  cartItemStock,
  cartItemIds,
});

export default cartItems;
