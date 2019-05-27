import { useReducer } from 'react';
import * as actions from '../actions/actionTypes';

const initialState = {
  loading: true,
  error: null,
  stockItems: {},
  cartItems: {},
};

const reducer = (state, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case actions.FETCH_STOCK_ITEMS:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        stockItems: action.payload,
      };
    case actions.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case actions.ADD_ITEM_TO_CART:
      const { item } = action.payload;
      return {
        ...state,
        loading: false,
        cartItems: {
          ...state.cartItems,
          [item.id]: {
            ...item,
            amt: action.payload.amt,
          },
        },
      };
    case actions.BUY_CART_ITEMS:
      return {
        ...state,
        cartItems: {},
      };
    default:
      return state;
  }
};

export default () => useReducer(reducer, initialState);
