import { ADD_TO_CART, REMOVE_FROM_CART, BUY_ITEMS } from '../actions/actionTypes';

const initialState = [];

const items = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      return [...state, newItem];
      // return state;
    case REMOVE_FROM_CART:
      // return state.filter((item) => item.id !== state.id);
      return state;
    case BUY_ITEMS:
      // return [...state, newWeather];
      return initialState;
    default:
      return state;
  }
}

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
//         completed: !state.completed,
//       };
//     default:
//       return state;
//   }
// };

export default items;
