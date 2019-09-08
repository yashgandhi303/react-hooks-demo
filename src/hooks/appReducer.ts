import {useReducer, Reducer} from 'react';
import omit from 'lodash.omit';
import * as actions from '../actions/actionTypes';
import {IItem} from '../components/ItemCard';

export interface IState {
  loading: boolean;
  error: Error | null;
  stockItems: {
    [id: string]: IItem;
  };
  cartItems: {
    [id: string]: IItem;
  };
}

export type Action =
  | {type: 'FETCH_STOCK_ITEMS'}
  | {type: 'FETCH_ITEMS_SUCCESS'; payload: any}
  | {type: 'ERROR'; payload: any}
  | {type: 'REMOVE_FROM_CART'; payload: any}
  | {type: 'BUY_CART_ITEMS'}
  | {type: 'ADD_ITEM_TO_CART'; payload: any};

export let initialState: IState = {
  loading: true,
  error: null,
  stockItems: {},
  cartItems: {},
};

// TODO - break this into two reducers (cartItems / stockItems)
export const appReducer: Reducer<IState, Action> = (state: IState, action: Action): IState => {
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
      const {amt, item} = action.payload;
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
    case actions.REMOVE_FROM_CART: {
      // update cart amount
      let {amt: amtToRemove, item} = action.payload;

      const currStockAmt = state.stockItems[item.id].stock;
      const currentCartAmt = state.cartItems[item.id].amt;

      const removeAll = amtToRemove >= currentCartAmt; // added the > since user could edit and put in higher than their actual amount - in that case, just remove all from the cart

      if (removeAll) {
        const updatedStockAmt =
          amtToRemove === currentCartAmt
            ? currStockAmt + amtToRemove
            : currStockAmt + currentCartAmt;

        return {
          ...state,
          cartItems: {
            ...omit(state.cartItems, item.id),
          },
          stockItems: {
            ...state.stockItems,
            [item.id]: {
              ...item,
              stock: updatedStockAmt,
            },
          },
        };
      }

      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [item.id]: {
            ...item,
            stock: currStockAmt + amtToRemove,
            amt: currentCartAmt - amtToRemove,
          },
        },
        stockItems: {
          ...state.stockItems,
          [item.id]: {
            ...item,
            stock: currStockAmt + amtToRemove,
          },
        },
      };
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

export default () => useReducer(appReducer, initialState);
