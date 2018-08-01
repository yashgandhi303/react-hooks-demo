// // import test from 'tape';
// import { put, call, take, takeEvery } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
// import Api from '../api';
// import * as actionTypes from '../actions/actionTypes';
// import { 
//     watchFetchItemsInStock,
//     fetchItemsInStock,
//     watchAddItem,
//     addItemToCart
// } from '../sagas';

// /** 
// *  resources:
// *
// *  https://stackoverflow.com/questions/34930735/prosconsof-using-redux-saga-with-es6-generators-vs-redux-thunk-with-es2017-asy/34933395#34933395
// -*
// -**/

// /* add items */
// describe('watchFetchItemsInStock saga test', () => {
//   const watchSaga = watchFetchItemsInStock();
//   let output = null;

//   it('takes FETCH_CART_ITEMS action', () => {
//     output = watchSaga.next().value;
//     let expected = takeEvery(actionTypes.FETCH_CART_ITEMS, fetchItemsInStock);
//     expect(output).toEqual(expected);
//   });
// });
  

// describe('fetchItemsInStock saga test', () => {
//   const gen = fetchItemsInStock();
//   let output = null;
//   const payload = {'item1': {
//     'id': 'item1',
//     'name': 'beer',
//     'stock': 7
//   }};

//   it(' should put the REQUEST_ITEMS_IN_STOCK when dispatching', () => {
//     output = gen.next().value; 
//     expect(output).toEqual(put({ type: actionTypes.REQUEST_ITEMS_IN_STOCK }));
//   });

//   it('should call the Api.fetchItems', () => {
//     output = gen.next().value;
//     let expected = call(Api.fetchItems);
//     expect(output).toEqual(expected);
//   });
  
//   it("should put the payload when dispatching 'FETCH_ITEMS_IN_STOCK'", () => {
//     output = gen.next().value;
//     expect(output).toEqual(put({ type: 'FETCH_ITEMS_IN_STOCK', payload: undefined }));
//   });
  
//   it('should be done', () => {
//     output = gen.next().value;
//     expect(gen.next().value).toEqual(undefined);
//   });
    
//   // TODO: throw an error

//   });

//   /* add items */
//   describe('WatchAddItem saga test', () => {
//     const watchSaga = watchAddItem();
//     let output = null;

//     it('watchAddItem Saga test', () => {
//       output = watchSaga.next().value;
//       let expected = takeEvery(actionTypes.ADD_TO_CART, addItemToCart);  
//       expect(output).toEqual(expected);
//     });  
//   });

//   // mock action data for addItemToCart

//   describe('addItemToCart saga test', () => {
//     // resource: https://medium.freecodecamp.org/async-operations-using-redux-saga-2ba02ae077b3
//     const gen = addItemToCart();
//     let output = null;
//     const newItemAction = {
//       amt: 7,
//       item: {
//         'id': 'item1',
//         'name': 'beer',
//         'stock': 17
//       }  
//     }
//     console.log('asdfasdf', newItemAction);
//     const { id, name, stock } = newItemAction.item;
//     const amt = newItemAction.amt;
//     const newStockAmt = stock - amt;

//     it('destructures the newItemAction correctly', () => {
//       expect(id).toEqual('item1');
//       expect(name).toEqual('beer');
//       expect(stock).toEqual(17);
//       expect(amt).toEqual(7);
  
//       // if (amt > stock) {
//       //   // TODO: dispatch error (they're adding more to cart than that item has in stock); for now logging error
//       //   console.error('Error: Adding too many items to cart: ', amt, stock);
//       // }
//       expect(newStockAmt).toEqual(10);
//     });
  
//     // it('should call the Api.addItemToCart', (done) => {
//     //   const action = newItemAction;
//     //   output = gen.next(action).value;
//     //   console.log('output1 :', output);
//     //   console.log('output2 :', gen.next().value);
//     //   console.log('newactionitem', newItemAction);
//     //   let expected = call(Api.addItemToCart, action);
//     //   done();
//     //   expect(output).toEqual(expected);
//     // });

//     // it('should put the ADD_ITEM_TO_CART when dispatching', (done) => {  
//     //   output = gen.next(newItemAction).value;
//     //   expect(output).toEqual(put({ 
//     //     type: actionTypes.ADD_ITEM_TO_CART,
//     //     amt,
//     //     id,
//     //     name,
//     //     stock: newStockAmt
//     //   }));
  
  
//       // next should put the payload when dispatching 'FETCH_ITEMS_IN_STOCK'
//       // expect(gen.next().value).toEqual(put({ type: 'FETCH_ITEMS_IN_STOCK', payload: undefined }));
  
//       // done
//       // expect(gen.next().value).toEqual(undefined);
//       // const finished = gen.next().done;
//       // done();
//       // expect(finished).toEqual(true);
//       // expect(output).toEqual(expected);
//       // // TODO: throw an error
  
//     // });  
//   });



// // test('fetchItemsInStock Saga test', (assert) => {
// //   const gen = fetchItemsInStock();

// //   assert.deepEqual(iterator.next().value, take(FETCH_CART_ITEMS));

// //   assert.deepEqual(
// //     gen.next().value,
// //     call(Api.fetchItems),
// //     'fetchItemsInStock Saga must call Api.fetchItems)'
// //   );
// //   const payload = {'item1': {
// //     'id': 'item1',
// //     'name': 'beer',
// //     'stock': 7
// //   }};

// //   assert.deepEqual(
// //     gen.next().value,
// //     put({ type: 'FETCH_ITEMS_IN_STOCK', payload }),
// //     'incrementAsync Saga must dispatch FETCH_ITEMS_IN_STOCK action with payload'
// //   );

// //   assert.deepEqual(
// //     gen.next(),
// //     { done: true, value: undefined },
// //     'incrementAsync Saga must be done'
// //   )

// //   assert.end();
// // });



// // test('incrementAsync Saga test', (assert) => {
// //   const gen = incrementAsync()

// //   assert.deepEqual(
// //     gen.next().value,
// //     call(delay, 1000),
// //     'incrementAsync Saga must call delay(1000)'
// //   )

// //   assert.deepEqual(
// //     gen.next().value,
// //     put({type: 'INCREMENT'}),
// //     'incrementAsync Saga must dispatch an INCREMENT action'
// //   )

// //   assert.deepEqual(
// //     gen.next(),
// //     { done: true, value: undefined },
// //     'incrementAsync Saga must be done'
// //   )

// //   assert.end()
// // });






// // it("should handle logout correctly", () => {
// //   const saga = logoutUser(); // call the saga

// //   // since generator functions stop at each 'yield' you can test it like this
// //   expect(saga.next().value).toEqual(take("LOGOUT_USER"));

// //   // then the next step can be tested
// //   expect(saga.next().value).toEqual(select(redirectUrl));
// //   // and the next step...
// //   expect(saga.next().value).toEqual(call(axios.get, `${BASE_URL}/v0/logout`, config));

// //   // then you can mock the axios's get() to return either an OK status or an error and test those scenarios separately 
// //   // in case everything went fine
// //   expect(saga.next().value).toEqual(put(logoutUserSuccess(redirectUrl)));

// //   // or in case of an error (in a separate test)
// //   expect(saga.next().value).toEqual(put(logoutUserFailure(mockedError)));
// // });

// // function* logoutUser() {
// //   while (true) {
// //     yield take("LOGOUT_USER");
// //     const redirectUrl = yield select(redirect) // get the redirect URL from the redux state (or whereever it may be stored);
// //     const result = yield call(axios.get, `${BASE_URL}/v0/logout`, config); // call the promise here, assuming it works similarily to my previous example

// //     if (result.error) {
// //       yield put(logoutUserFailure(result.error));
// //     } else {
// //       yield put(logoutUserSuccess(redirectUrl));
// //     }
// //   }
// // }  




// // function* fetchProducts() {
// //   try {
// //     const products = yield call(Api.fetch, '/products')
// //     yield put({ type: 'PRODUCTS_RECEIVED', products })
// //   }
// //   catch(error) {
// //     yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
// //   }
// // }

// // const iterator = fetchProducts()

// // // expects a call instruction
// // assert.deepEqual(
// //   iterator.next().value,
// //   call(Api.fetch, '/products'),
// //   "fetchProducts should yield an Effect call(Api.fetch, './products')"
// // )

// // // create a fake error
// // const error = {}

// // // expects a dispatch instruction
// // assert.deepEqual(
// // // Add a comment to this line
// //   iterator.throw(error).value,
// //   put({ type: 'PRODUCTS_REQUEST_FAILED', error }),
// //   "fetchProducts should yield an Effect put({ type: 'PRODUCTS_REQUEST_FAILED', error })"
// // )


// // // const iterator = fetchProducts()

// // // expects a call instruction
// // assert.deepEqual(
// //   iterator.next().value,
// //   call(Api.fetch, '/products'),
// //   "fetchProducts should yield an Effect call(Api.fetch, './products')"
// // )





