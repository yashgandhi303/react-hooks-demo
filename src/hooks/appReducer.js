import { useReducer } from 'react';
import * as actions from '../actions/actionTypes';
import omit from 'lodash.omit';

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
      const { amt, item } = action.payload;

      const currentStockAmt = state.stockItems[item.id].stock;

      let newStockAmt = currentStockAmt - amt;
      let newCartAmt = amt;

      // see if the item is already in cart
      const itemInCart = state.cartItems.hasOwnProperty(item.id) && state.cartItems[item.id];
      // if item is already in cart, adjust amount in cart
      if (itemInCart) {
        const currentCartAmt = state.cartItems[item.id].amt;
        newCartAmt += currentCartAmt;
      }

      return {
        ...state,
        loading: false,
        cartItems: {
          ...state.cartItems,
          [item.id]: {
            ...item,
            amt: newCartAmt,
            stock: newStockAmt,
          },
        },
        stockItems: {
          ...state.stockItems,
          [item.id]: {
            ...item,
            stock: newStockAmt,
          },
        },
      };
    case actions.REMOVE_FROM_CART:
      // TODO - also use an update cart to update the # in the cart (without removing)
      const newCartItems = omit(state.cartItems, action.payload.item.id);
      return {
        ...state,
        cartItems: {
          ...newCartItems,
        }
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
