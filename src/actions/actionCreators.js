import axios from 'axios';
import * as firebase from 'firebase';
import { config } from '../fire';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_ITEMS_IN_STOCK,
  FETCH_CART_ITEMS,
  BUY_ITEMS,
  ADD_NEW_ITEM_TO_STOCK,
  REQUEST_ITEMS_IN_STOCK
} from './actionTypes';

firebase.initializeApp(config);
const database = firebase.database();

const requestItems = () => ({
  type: REQUEST_ITEMS_IN_STOCK
});

export const fetchItemsInStock = () => {
  return (dispatch) => {
    dispatch(requestItems()); // for some type of spinner/loading in the future
    // call to firebase and get all items in stock
    // axios.get('https://docs-examples.firebaseio.com/rest/saving-data/fireblog/posts.json?print=pretty')
    axios.get(`https://carrinho-15670.firebaseio.com/stockItems.json`)
      .then(res => {
        console.log('asdfasdf', res.data);
        const itemsInStock = res.data;
        dispatch({
          type: FETCH_ITEMS_IN_STOCK,
          payload: itemsInStock
        });
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

// TODO: 
// removeItemFromCart can also use this method
// both need an id, and a new stock amount
export const addItemToCart = (id, name, newStockAmt) => {
  // TODO: need check to make sure stock doesn't go negative
  console.log('addItemToCart: ', id, name, newStockAmt);
  return (dispatch) => {
    axios.put(`https://carrinho-15670.firebaseio.com/stockItems/${id}/stock.json`, newStockAmt)
      .then(res => {
        console.log('asdfasdf', res.data);
        dispatch({
          type: ADD_TO_CART,
          payload: {
            id,
            name,
            stock: newStockAmt // FIXME:  <---
          }
        })
      })
  }
}

export const buyItems = () => {
  console.log('called buyItems');
  // will remove all items from cart (as if purchased)
  return { type: BUY_ITEMS };
}


// export const changeItemQuantity = (item) => {
//   // will remove item from cart
//   return { type: CHANGE_ITEM_QUANTITY, payload: item.id };
// }

export const removeFromCart = (itemId) => {
  // needs to increase stockItems, and decrease the items in cart
  console.log('removeFromCart ', itemId);
  // return (dispatch) => {

    return { type: REMOVE_FROM_CART, payload: itemId };

  // }
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
