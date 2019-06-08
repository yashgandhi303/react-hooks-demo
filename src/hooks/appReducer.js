import { useReducer } from 'react';
import omit from 'lodash.omit';
import * as actions from '../actions/actionTypes';

const initialState = {
  loading: true,
  error: null,
  stockItems: {},
  cartItems: {},
};

// TODO - break this into two reducers (cartItems / stockItems)
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
    case actions.ADD_ITEM_TO_CART: {
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
    }
    case actions.REMOVE_FROM_CART: { // update cart amount
      let { amt, item } = action.payload;
      const amtToRemove = amt;

      const currStockAmt = state.stockItems[item.id].stock;
      const currentCartAmt = state.cartItems[item.id].amt;

      const removeAll = amtToRemove === currentCartAmt;

      let updatedCartAmt = 0;
      let updatedStockAmt = 0;

      if (removeAll) {

        return {
          ...state,
          cartItems: {
            ...omit(state.cartItems, item.id),
          },
          stockItems: {
            ...state.stockItems,
          }
        };
      }

      // TODO - also use an update cart to update the # in the cart (without removing)
      // return {
      //   ...state,
      //   cartItems: {
      //     ...updatedCartItems,
      //   },
      //   stockItems: {
      //     ...state.stockItems,
      //
      //   }
      // };
    }
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
