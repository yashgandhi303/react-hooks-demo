import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, BUY_ITEMS, UPDATE_ITEM_AMT } from '../actions/actionTypes';
import omit from 'lodash/omit';

const cartItemStock = (state = {}, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      console.log('cartItemStock nbb: ', action,  state.hasOwnProperty(action.id));

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
      const id = action.payload;
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
  const cartItemsArray = [];
  for (let item in items) {
    if (items[item].id !== action.payload) {
      cartItemsArray.push(items[item])
    }
  }
  return cartItemsArray;
};

const cartItemIds = (state = [], action) => {
  switch(action.type) {
    case ADD_TO_CART:
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