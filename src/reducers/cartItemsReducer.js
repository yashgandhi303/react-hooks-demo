import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, BUY_ITEMS } from '../actions/actionTypes';
import omit from 'lodash/omit';
import { log } from 'core-js/library/web/timers';

const cartItemStock = (state = {}, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        // [action.payload.id]: action.payload,
        [action.id]: {
          id: action.id,
          name: action.name,
          amt: action.amt,
          stock: action.stock
        }
      };
    case REMOVE_FROM_CART:
      console.warn('state: ', state);
      const cartItems = state;
      const id = action.payload;
      console.log('asdfasdf', cartItems, id);
      console.warn('warn2: ', {
        ...omit(cartItems, id)
      });
      const newState = omit(cartItems, id);
      console.log('newThing: ', newState);
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

const getCartItemsArray = (items, action) => {
  // console.log('index state: ', items);
  const cartItemsArray = [];
  for (let item in items) {
    // console.log(items[item]);
    if (items[item].id !== action.payload) {
      cartItemsArray.push(items[item])
    }
  }
  // console.log('final stockItemsArray', stockItemsArray);
  return cartItemsArray;
};

const cartItemIds = (state = [], action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.id];
    case REMOVE_FROM_CART:
    console.log('action in cartItemIds: ', action)
    console.warn('carItemIds: ', state.filter((item) => item !== action.id))
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


// const cartItems = (state = [], action) => {
//   switch(action.type) {
//     case ADD_TO_CART:
//       const newItem = action.payload;
//       return [...state, newItem];
//     case REMOVE_FROM_CART:
//       return state.filter((item) => item !== action.payload);
//     case BUY_ITEMS:
//       // returns default state (after purchasing)
//       return initialCartItems;
//     default:
//       return state;
//   }
// }

// const item = (state, action) => {
//   switch (action.type) {
//     case ADD_ITEM:
//       return {
//         id: action.id,
//         text: action.text,
//         completed: false,
//       };
//     case DELETE_ITEM:
//       if (state.id !== action.id) {
//         return state;
//       }
//       return {
//         ...state,
//         inStore: !state.inStore,
//       };
//     default:
//       return state;
//   }
// };

export default cartItems;

// const getCartItemsArray = (items) => {
//   // console.log('index state: ', items);
//   const cartItemsArray = [];
//   for (let item in items) {
//     // console.log(items[item]);
//     if (items[item].stock > 0) {
//       cartItemsArray.push(items[item])
//     }
//   }
//   // console.log('final stockItemsArray', stockItemsArray);
//   return cartItemsArray;
// };