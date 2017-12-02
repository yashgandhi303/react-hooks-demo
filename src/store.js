import { createStore, compose, applyMiddleware } from 'redux';
// thunks:
// import thunk from 'redux-thunk';
// sagas:

// import throttle from 'lodash/throttle';
import rootReducer from './reducers/root_reducer';
// import { loadState, saveState } from './localStorage';

const configureStore = () => {

  // const persistedState = loadState();

  const store = createStore(
    rootReducer
    // persistedState,
    // compose(
    // can use thunks, sagas, etc.
    //   applyMiddleware(thunk),
    //   typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    // )
  );

  // store.subscribe(throttle(() => {
  //   // console.log('current state (store.js): ', store.getState());
  //   saveState({
  //     weather: store.getState().weather,
  //     laneReducer: store.getState().laneReducer,
  //     stocks: store.getState().stocks,
  //     currencies: store.getState().currencies
  //   });
  // }), 1000);

  return store;
}


export default configureStore;
