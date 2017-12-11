import axios from 'axios';

// import firebase from 'firebase';
import * as firebase from 'firebase';
import { config } from '../fire';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_ITEMS_IN_STOCK,
  FETCH_CART_ITEMS,
  BUY_ITEMS,
  ADD_NEW_ITEM_TO_STOCK
} from './actionTypes';

firebase.initializeApp(config);
const database = firebase.database();

// for now using name as id... id still there for future?  doesn't matter atm
function addInitialItems () {
  const itemId = 'kns289k2';
  database.ref(`stockItems/${itemId}`).set({
    name: 'hot dogs',
    stock: 0
  });
}
// addInitialItems();

function alterItemStock(id, amount) {
  const currentStock = 80;
  const updatedStock = currentStock - amount;
  const data = `${updatedStock}`;
  const url = `https://carrinho-15670.firebaseio.com/stockItems/${id}/stock.json`;
  axios.put(url, data)
    .then(res => {
      console.log('asdfasdf', res.data);
      // const itemsInStock = res.data;
      // dispatch({
      //     type: FETCH_ITEMS_IN_STOCK,
      //     payload: itemsInStock
      // });
    })
    .catch(err => {
      console.error('error: ', err);
      // dispatch({
      //     type: ERROR,
      //     payload: {"Error": err}
      // })
    });
}
// alterItemStock('abc123', 3);

// function addInitialItems () {
//   database.ref('stockItems/').set({
//     items: [
//       {
//         id: 'abc123',
//         name: 'beer',
//         stock: 83
//       },
//       {
//         id: 'xyz456',
//         name: 'whiskey',
//         stock: 43
//       },
//       {
//         id: '4asd8az',
//         name: 'hot dogs',
//         stock: 0
//       },
//       {
//         id: '1kn92ks',
//         name: 'hamburgers',
//         stock: 27
//       }
//     ]
//   });
// }


// console.log('fire: ', nick);

// const itemsRef =

// let ROOT_URL;
// if (process.env.NODE_ENV === 'production') {
//   ROOT_URL = '/';
// } else {
//   ROOT_URL = 'http://localhost:3090/';
// }

// const Items = new firebase("https://carrinho-15670.firebaseio.com");

// export const fetchCartItems = () => {
//   return dispatch => {
//     Items.on('value', snapshot => {
//       dispatch({
//         type: FETCH_CART_ITEMS,
//         payload: snapshot.val()
//       })
//     })
//   }
// }

export const fetchItemsInStock = () => {
  return (dispatch) => {
    // call to firebase and get all items in stock
    // axios.get('https://docs-examples.firebaseio.com/rest/saving-data/fireblog/posts.json?print=pretty')
    const url = `https://carrinho-15670.firebaseio.com/stockItems.json`;
    axios.get(url)
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
        // dispatch({
        //     type: ERROR,
        //     payload: {"Error": err}
        // })
      });
  }
}

export const addItemToCart = (id, name, amount) => {
  // TODO: need check to make sure stock doesn't go negative
  console.log('addItemToCart: ', id, name, amount);
  return (dispatch) => {

    dispatch({
      type: ADD_TO_CART,
      payload: {
        id,
        name,
        amount
      }
      // id,
      // amount
    });
  }
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
