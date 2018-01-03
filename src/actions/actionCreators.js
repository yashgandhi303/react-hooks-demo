import axios from 'axios';
import * as firebase from 'firebase';
import { config } from '../fire';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_ITEMS_IN_STOCK,
  FETCH_CART_ITEMS,
  BUY_ITEMS,
  CHANGE_ITEM_QUANTITY,
  UPDATE_ITEM_AMT,
  ADD_NEW_ITEM_TO_STOCK,
  REQUEST_ITEMS_IN_STOCK
} from './actionTypes';

firebase.initializeApp(config);
const database = firebase.database();

const requestItems = () => ({
  // TODO: initiate spinner
  type: REQUEST_ITEMS_IN_STOCK
});

// TODO: actions to create:
// update stock for existing item (changeItemQuantity below)
// add new item to store stock (addNewItemToStock below)
// a filter/search to filter for only that item in stock/cart


// export const fetchItemsInStock = () => {
//   return (dispatch) => {
//     dispatch(requestItems()); // for some type of spinner/loading in the future
//     // call to firebase and get all items in stock
//     // axios.get('https://docs-examples.firebaseio.com/rest/saving-data/fireblog/posts.json?print=pretty')
//     axios.get(`https://carrinho-15670.firebaseio.com/stockItems.json`)
//       .then(res => {
//         console.log('asdfasdf', res.data);
//         const itemsInStock = res.data;
//         dispatch({
//           type: FETCH_ITEMS_IN_STOCK,
//           payload: itemsInStock
//         });
//       })
//       .catch(err => {
//         console.error('Error fetching items: ', err);
//         // TODO: below
//         // dispatch({
//         //     type: ERROR,
//         //     payload: {"Error": err}
//         // })
//       });
//   }
// }

// TODO: 
// removeItemFromCart can also use this method
// both need an id, and a new stock amount
// export const addItemToCart = (id, name, newStockAmt) => {
// export const addItemToCart = (item, amt) => {
//   const { id, name, stock } = item;
//   if (amt > stock) {
//     // TODO: dispatch error (they're adding more to cart than that item has in stock); for now logging error
//     console.error('Error: Adding too many items to cart: ', amt, stock);
//   }
//   const newStockAmt = stock - amt;

//   // TODO: need check to make sure stock doesn't go negative
//   console.log('addItemToCart: ', id, name, newStockAmt);
//   return (dispatch) => {
//     axios.put(`https://carrinho-15670.firebaseio.com/stockItems/${id}/stock.json`, newStockAmt)
//       .then(res => {
//         console.log('asdfasdf', res.data);
//         dispatch({
//           type: ADD_TO_CART,
//           amt,
//           id,
//           name,
//           stock: newStockAmt
//         })
//       })
//   }
// }

export const buyItems = (items) => {
  console.log('called buyItems', items);
  // will remove all items from cart (as if purchased)
  return { type: BUY_ITEMS };
}

export const removeFromCart = (item, amt) => {
  console.log('aasdfasdf ', item, amt);
  const { id, name, stock } = item;
  const newStockAmt = stock + amt;
  
  // TODO: need check to make sure stock doesn't go negative
  console.log('removeFromCart: ', id, name, newStockAmt);
  return (dispatch) => {
    axios.put(`https://carrinho-15670.firebaseio.com/stockItems/${id}/stock.json`, newStockAmt)
      .then(res => {
        console.log('asdfasdf', res.data);
        dispatch({
          type: REMOVE_FROM_CART,
          amt,
          id,
          name,
          stock: newStockAmt // FIXME:  <---
        })
      })
  }
}

const formatItem = (item) => {
  let formattedItem = {};
  formattedItem[item.id] = {
    id: item.id,
    name: item.name,
    stock: item.stock
  }
  return formattedItem;
}

export const addNewItemToStock = (item) => {
  // will remove item from cart
  const newItem = formatItem(item);
  console.log('addNewItemToStock ', item, newItem);

  return (dispatch) => {
    // dispatch(requestPosts()); // for some type of spinner/loading in the future
    axios.post(`https://carrinho-15670.firebaseio.com/stockItems.json`, newItem)
      .then(res => {
        console.log('asdfasdf', res.data);
        const itemsInStock = res.data;
        // return { type: ADD_NEW_ITEM_TO_STOCK, payload: item };
        // dispatch({
        //     type: FETCH_ITEMS_IN_STOCK,
        //     payload: itemsInStock
        // });
      })
      .catch(err => {
        console.error('Error fetching items: ', err);
        // TODO: below
        // dispatch({
        //     type: ERROR,
        //     payload: {"Error": err}
        // })
      });
  }
}

export const changeItemStockQuantity = (item) => {
  // will remove item from cart
  return { type: CHANGE_ITEM_QUANTITY, payload: item.id };
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
