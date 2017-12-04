// import axios from 'axios';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_ITEM_QUANTITY,
  SHOW_CART_ITEMS,
  CHECKOUT,
  BUY_ITEMS
} from './actionTypes';

// let ROOT_URL;
// if (process.env.NODE_ENV === 'production') {
//   ROOT_URL = '/';
// } else {
//   ROOT_URL = 'http://localhost:3090/';
// }


/*
      SEARCH actions
*/
export function setSearchTerm(searchTerm) {
  // console.log('setSearchTerm: ', searchTerm);
  // return { type: FETCH_SAMPLE, payload: searchTerm };
  return;
}

export function getSearchTerm(searchTerm, searchType) {
  // console.log('getWeather called: ', WEATHER_URL);
  return (dispatch) => {
    dispatch(setSearchTerm(searchTerm, searchType));
  }
}


export const addItemToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
});



// export const changeItemQuantity = (item) => {
//   // will remove item from cart
//   return { type: CHANGE_ITEM_QUANTITY, payload: item.id };
// }

// export const removeFromCart = (item) => {
//   // will remove item from cart
//   return { type: REMOVE_FROM_CART, payload: item.id };
// }

// export const buyItems = () => {
//   // will remove all items from cart (as if purchased)
//   return { type: BUY_ITEMS };
// }
