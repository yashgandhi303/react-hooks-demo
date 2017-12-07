// import axios from 'axios';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_ITEM_QUANTITY,
  // SHOW_CART_ITEMS,
  BUY_ITEMS,
  ADD_NEW_ITEM_TO_STOCK
} from './actionTypes';

// let ROOT_URL;
// if (process.env.NODE_ENV === 'production') {
//   ROOT_URL = '/';
// } else {
//   ROOT_URL = 'http://localhost:3090/';
// }


export const addItemToCart = (item) => {
  // will remove item from cart
  console.log('addItemToCart: ', item);
  return {
    type: ADD_TO_CART,
    payload: item
  };
}

// export const addItemToCart = (item) => ({
//   type: ADD_TO_CART,
//   payload: item
// });

export const buyItems = () => {
  console.log('called buyItems');
  // will remove all items from cart (as if purchased)
  return { type: BUY_ITEMS };
}


// export const changeItemQuantity = (item) => {
//   // will remove item from cart
//   return { type: CHANGE_ITEM_QUANTITY, payload: item.id };
// }

export const removeFromCart = (item) => {
  // will remove item from cart
  console.log('removeFromCart ', item);
  return { type: REMOVE_FROM_CART, payload: item };
}

export const addNewItemToStock = (item) => {
  // will remove item from cart
  console.log('addNewItemToStock ', item);
  return { type: ADD_NEW_ITEM_TO_STOCK, payload: item };
}




/*
SEARCH actions
*/
// export function setSearchTerm(searchTerm) {
//   // console.log('setSearchTerm: ', searchTerm);
//   // return { type: FETCH_SAMPLE, payload: searchTerm };
//   return;
// }
//
// export function getSearchTerm(searchTerm, searchType) {
//   // console.log('getWeather called: ', WEATHER_URL);
//   return (dispatch) => {
//     dispatch(setSearchTerm(searchTerm, searchType));
//   }
// }
