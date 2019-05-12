import { all, call, put, takeEvery } from 'redux-saga/effects';
import Api from './api';

import {
  ADD_TO_CART,
  ADD_ITEM_TO_CART,
  ADD_NEW_ITEM_TO_STOCK,
  BUY_CART_ITEMS,
  BUY_ITEMS,
  FETCH_CART_ITEMS,
  FETCH_ITEMS_IN_STOCK,
  REQUEST_ITEMS_IN_STOCK,
  REMOVE_FROM_CART,
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_AMT,
} from './actions/actionTypes';

export default function* rootSaga() {
  yield all([
    watchFetchItemsInStock(),
    watchAddItem(),
    watchRemoveItem(),
    watchBuyItems(),
    watchAddNewItemToStock()
  ]);
}

/** 
 * watchers/helpers
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

export function* watchAddNewItemToStock() {
  yield takeEvery(ADD_NEW_ITEM_TO_STOCK, addItemToStock);
}

/** sagas
*
*/
export function* fetchItemsInStock() {
  try {
    yield put({ type: REQUEST_ITEMS_IN_STOCK });

    const itemsInStock = yield call(Api.fetchItems);
    
    yield put({
      type: FETCH_ITEMS_IN_STOCK,
      payload: itemsInStock
    });

  } catch (error) {
    // yield put({ type: ‘FETCH_FAILED’, error: error }); // TODO
    console.error('Error fetching items in stock: ', error);
  }
}

export function* addItemToCart(action) {
  try {
    const { description, id, image, name, stock } = action.item;

    const amt = Number(action.amt);
    if (amt > stock) {
      // TODO: dispatch error (they're adding more to cart than that item has in stock); for now logging error
      console.error('Error: Adding too many items to cart: ', amt, stock);
    }
    const newStockAmt = stock - amt;
  
    // TODO: need check to make sure stock doesn't go negative
    
    const addedItem = yield call(Api.addItemToCart, id, newStockAmt);

    yield put({ // TODO: just pass through the (updated) item...
      type: ADD_ITEM_TO_CART,
      amt,
      description,
      id,
      image,
      name,
      stock: newStockAmt,
    });

    return addedItem;

  } catch (error) {
    // yield put({ type: ‘ADD_TO_CART_FAILED’, error: error }); // TODO
    console.error('Error adding item to cart: ', error);
  }
}

export function* removeFromCart(action) {
  try {
    const { item, amt, initialAmt } = action;
    const { id, name, stock } = item;
    const newStockAmt = stock + Number(amt);
    // TODO: need check to make sure stock doesn't go negative (will throw error so it catches below and dispatches)
    // unless I want to allow it go negative??
    const removedItem = yield call(Api.removeItemFromCart, id, newStockAmt);

    if (Number(amt) < initialAmt) { // remove the item from cart if user removes all of the item, otherwise just update quantity
      yield put({
        type: UPDATE_ITEM_AMT,
        amt: initialAmt - Number(amt),
        id,
        name,
        stock: newStockAmt
      });
    } else {
      yield put({
        type: REMOVE_FROM_CART,
        amt,
        id,
        name,
        stock: newStockAmt
      });
    }

    return removedItem;

  } catch (error) {
    // yield put({ type: ‘REMOVE_FROM_CART_FAILED’, error: error }); // TODO
    console.error('Error removing item from cart: ', error);
  }
}

export function* buyAllItems() {
  try {

    yield put({ type: BUY_ITEMS });    

  } catch (error) {
    // yield put({ type: ‘BUY_ITEMS_FAILURE’, error: error }); // TODO
    console.error('Error buying all items: ', error);
  }
}

export function* addItemToStock(action) {
  try {
    const { item } = action;
  
    const addedItem = yield call(Api.addItemToStock, item);
    // yield put({
    //   type: BUY_ITEMS
    // });    

  } catch (error) {
    // yield put({ type: ‘ADD_ITEM_TO_STOCK_FAILURE’, error: error }); // TODO
    console.error('Error adding new item to stock: ', error);
  }
}
