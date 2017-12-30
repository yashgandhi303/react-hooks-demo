import { delay } from 'redux-saga';
import { put, takeEvery, all, call, take } from 'redux-saga/effects';
import axios from 'axios';
import * as firebase from 'firebase';
import { config } from './fire';
import Api from './api';

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
} from './actions/actionTypes';

// firebase.initializeApp(config);
// const database = firebase.database();

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    fetchItemsInStock()
  ]);
}

function* fetchItemsInStock() {
  // console.log('fetchItemsInStock saga');
  try {
    yield take(FETCH_CART_ITEMS);

    // console.log('nick its here: ', yield call(Api.fetchItems));
    const itemsInStock = yield call(Api.fetchItems);
    
    console.log('sagas itemsInStock: ', itemsInStock);
    yield put({
      type: FETCH_ITEMS_IN_STOCK,
      payload: itemsInStock
    });

  } catch (error) {
    // yield put({type: ‘FETCH_FAILED’, error: error});
    console.error('Error fetching items in stock: ', error);
  }
}


// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}