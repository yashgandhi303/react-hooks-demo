import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
// thunks:
import thunk from 'redux-thunk';
// sagas:
// import createSagaMiddleware from 'redux-saga';

// import throttle from 'lodash/throttle';
import rootReducer from './reducers/root_reducer';
// import { loadState, saveState } from './localStorage';
// const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const configureStore = () => {

  // const persistedState = loadState();

  const store = createStore(
    rootReducer,
    // persistedState,
    compose(
      applyMiddleware( // can use thunks, sagas, etc.
        thunk,
        loggerMiddleware
      ),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )
  );

  // if using persistedState:
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
