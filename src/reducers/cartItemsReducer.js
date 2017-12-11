import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, BUY_ITEMS } from '../actions/actionTypes';

const cartItems = (state = {}, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.id]: action.payload
      };
    case REMOVE_FROM_CART:
    // TODO
      return state;
      // return state.filter((item) => item !== action.payload);
    case BUY_ITEMS:
      // returns default state (after purchasing)
      return {};
    default:
      return state;
  }
}

const cartItemIds = (state = [], action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.id];
    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.id);
    case BUY_ITEMS:
      // returns default state (after purchasing)
      return [];
    default:
      return state;
  }
}

const nick = combineReducers({
  cartItems,
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
