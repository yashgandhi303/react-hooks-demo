// import test from 'tape';
import { put, call, take, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { 
    watchFetchItemsInStock,
    fetchItemsInStock,

} from '../sagas';
import Api from '../api';

/** 
*  resources:
*
*  https://stackoverflow.com/questions/34930735/prosconsof-using-redux-saga-with-es6-generators-vs-redux-thunk-with-es2017-asy/34933395#34933395
-*
-**/


import * as actionTypes from '../actions/actionTypes';

it('watchFetchItemsInStock Saga test', () => {
    const watchSaga = watchFetchItemsInStock();

    let output = watchSaga.next().value;
    let expected = takeEvery(actionTypes.FETCH_CART_ITEMS, fetchItemsInStock);
    expect(output).toEqual(expected);
  
  });
  
  it('fetchItemsInStock Saga test', () => {
    const gen = fetchItemsInStock();

    // should put the REQUEST_ITEMS_IN_STOCK when dispatching
    expect(gen.next().value).toEqual(put({ type: actionTypes.REQUEST_ITEMS_IN_STOCK }));

    // should call the Api.fetchItems
    let expected = call(Api.fetchItems);
    expect(gen.next().value).toEqual(expected);
  
    const payload = {'item1': {
        'id': 'item1',
        'name': 'beer',
        'stock': 7
      }};
    
    // next should put the payload when dispatching 'FETCH_ITEMS_IN_STOCK'
    expect(gen.next().value).toEqual(put({ type: 'FETCH_ITEMS_IN_STOCK', payload: undefined }));

    // done
    expect(gen.next().value).toEqual(undefined);

    // TODO: throw an error

  });



// test('fetchItemsInStock Saga test', (assert) => {
//   const gen = fetchItemsInStock();

//   assert.deepEqual(iterator.next().value, take(FETCH_CART_ITEMS));

//   assert.deepEqual(
//     gen.next().value,
//     call(Api.fetchItems),
//     'fetchItemsInStock Saga must call Api.fetchItems)'
//   );
//   const payload = {'item1': {
//     'id': 'item1',
//     'name': 'beer',
//     'stock': 7
//   }};

//   assert.deepEqual(
//     gen.next().value,
//     put({ type: 'FETCH_ITEMS_IN_STOCK', payload }),
//     'incrementAsync Saga must dispatch FETCH_ITEMS_IN_STOCK action with payload'
//   );

//   assert.deepEqual(
//     gen.next(),
//     { done: true, value: undefined },
//     'incrementAsync Saga must be done'
//   )

//   assert.end();
// });



// test('incrementAsync Saga test', (assert) => {
//   const gen = incrementAsync()

//   assert.deepEqual(
//     gen.next().value,
//     call(delay, 1000),
//     'incrementAsync Saga must call delay(1000)'
//   )

//   assert.deepEqual(
//     gen.next().value,
//     put({type: 'INCREMENT'}),
//     'incrementAsync Saga must dispatch an INCREMENT action'
//   )

//   assert.deepEqual(
//     gen.next(),
//     { done: true, value: undefined },
//     'incrementAsync Saga must be done'
//   )

//   assert.end()
// });






// it("should handle logout correctly", () => {
//   const saga = logoutUser(); // call the saga

//   // since generator functions stop at each 'yield' you can test it like this
//   expect(saga.next().value).toEqual(take("LOGOUT_USER"));

//   // then the next step can be tested
//   expect(saga.next().value).toEqual(select(redirectUrl));
//   // and the next step...
//   expect(saga.next().value).toEqual(call(axios.get, `${BASE_URL}/v0/logout`, config));

//   // then you can mock the axios's get() to return either an OK status or an error and test those scenarios separately 
//   // in case everything went fine
//   expect(saga.next().value).toEqual(put(logoutUserSuccess(redirectUrl)));

//   // or in case of an error (in a separate test)
//   expect(saga.next().value).toEqual(put(logoutUserFailure(mockedError)));
// });

// function* logoutUser() {
//   while (true) {
//     yield take("LOGOUT_USER");
//     const redirectUrl = yield select(redirect) // get the redirect URL from the redux state (or whereever it may be stored);
//     const result = yield call(axios.get, `${BASE_URL}/v0/logout`, config); // call the promise here, assuming it works similarily to my previous example

//     if (result.error) {
//       yield put(logoutUserFailure(result.error));
//     } else {
//       yield put(logoutUserSuccess(redirectUrl));
//     }
//   }
// }  




// function* fetchProducts() {
//   try {
//     const products = yield call(Api.fetch, '/products')
//     yield put({ type: 'PRODUCTS_RECEIVED', products })
//   }
//   catch(error) {
//     yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
//   }
// }

// const iterator = fetchProducts()

// // expects a call instruction
// assert.deepEqual(
//   iterator.next().value,
//   call(Api.fetch, '/products'),
//   "fetchProducts should yield an Effect call(Api.fetch, './products')"
// )

// // create a fake error
// const error = {}

// // expects a dispatch instruction
// assert.deepEqual(
// // Add a comment to this line
//   iterator.throw(error).value,
//   put({ type: 'PRODUCTS_REQUEST_FAILED', error }),
//   "fetchProducts should yield an Effect put({ type: 'PRODUCTS_REQUEST_FAILED', error })"
// )


// // const iterator = fetchProducts()

// // expects a call instruction
// assert.deepEqual(
//   iterator.next().value,
//   call(Api.fetch, '/products'),
//   "fetchProducts should yield an Effect call(Api.fetch, './products')"
// )





