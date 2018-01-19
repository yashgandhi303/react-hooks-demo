// import { delay } from 'redux-saga';
import { put, takeEvery, all, call /*, take, fork, takeLatest*/ } from 'redux-saga/effects';
import Api from './api';

import {
  ADD_TO_CART,
  ADD_ITEM_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ITEM_FROM_CART,
  FETCH_ITEMS_IN_STOCK,
  FETCH_CART_ITEMS,
  BUY_ITEMS,
  BUY_CART_ITEMS,
  REQUEST_ITEMS_IN_STOCK,
  // CHANGE_ITEM_QUANTITY,
  // UPDATE_ITEM_AMT,
  // ADD_NEW_ITEM_TO_STOCK
} from './actions/actionTypes';


export default function* rootSaga() {
  yield all([
    watchFetchItemsInStock(),
    watchAddItem(),
    watchRemoveItem(),
    watchBuyItems()
  ]);
}

/** watchers/helpers
 */
export function* watchFetchItemsInStock() {
  yield takeEvery(FETCH_CART_ITEMS, fetchItemsInStock);
}

export function* watchAddItem() {
  yield takeEvery(ADD_TO_CART, addItemToCart);
}

export function* watchRemoveItem() {
  yield takeEvery(REMOVE_ITEM_FROM_CART, removeFromCart);
}

export function* watchBuyItems() {
  yield takeEvery(BUY_CART_ITEMS, buyAllItems);
}


/** sagas
*
*/
export function* fetchItemsInStock() {
  // while true nb???
  try {

    yield put({ type: REQUEST_ITEMS_IN_STOCK });

    const itemsInStock = yield call(Api.fetchItems);
    
    yield put({
      type: FETCH_ITEMS_IN_STOCK,
      payload: itemsInStock
    });

  } catch (error) {
    // yield put({ type: ‘FETCH_FAILED’, error: error });
    console.error('Error fetching items in stock: ', error);
  }
}

export function* addItemToCart(action) {
  try {
    const { id, name, stock } = action.item;
    console.warn('in sagas action: ', action);
    const amt = action.amt;
    if (amt > stock) {
      // TODO: dispatch error (they're adding more to cart than that item has in stock); for now logging error
      console.error('Error: Adding too many items to cart: ', amt, stock);
    }
    const newStockAmt = stock - amt;
  
    // TODO: need check to make sure stock doesn't go negative
    // console.log('addItemToCart: ', id, name, newStockAmt);
    
    const addedItem = yield call(Api.addItemToCart, id, newStockAmt);

    yield put({
      type: ADD_ITEM_TO_CART,
      amt,
      id,
      name,
      stock: newStockAmt
    });

    return addedItem;

  } catch (error) {
    // yield put({ type: ‘ADD_TO_CART_FAILED’, error: error });
    console.error('Error adding item to cart: ', error);
  }
}

export function* removeFromCart(action) {
  try {
    const { item, amt } = action;
    const { id, name, stock } = item;

    const newStockAmt = stock + amt;
  
    // TODO: need check to make sure stock doesn't go negative
    
    const removedItem = yield call(Api.removeItemFromCart, id, newStockAmt);

    yield put({
      type: REMOVE_FROM_CART,
      amt,
      id,
      name,
      stock: newStockAmt
    });

    return removedItem;

  } catch (error) {
    // yield put({ type: ‘REMOVE_FROM_CART_FAILED’, error: error });
    console.error('Error removing item from cart: ', error);
  }
}

export function* buyAllItems() {
  try {

    yield put({ type: BUY_ITEMS });    

  } catch (error) {
    // yield put({ type: ‘BUY_ITEMS_FAILURE’, error: error });
    console.error('Error buying all items: ', error);
  }
}

/*
    examples:
*/

// Our worker Saga: will perform the async increment task
// export function* incrementAsync() {
//   yield delay(1000)
//   yield put({ type: 'INCREMENT' })
// }

// // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
// export function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }