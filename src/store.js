import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

/* firebase config */
import * as firebase from 'firebase';
import rootSaga from './sagas';
import { config } from './fire';
import rootReducer from './reducers/root_reducer';
const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger();

/** firebase database setup */ // TODO: put elsewhere
firebase.initializeApp(config);
const database = firebase.database();
export const ref = database.ref();
export const firebaseAuth = firebase.auth;

console.info('Firebase database: ', ref);

const DEBUG = process.env !== 'production' && process.env.NODE_ENV !== 'production';

const middleware = [
  thunk,
  sagaMiddleware,
  DEBUG && loggerMiddleware,
].filter(Boolean);


const store = createStore(
  rootReducer,
  // persistedState,
  compose(
    applyMiddleware( // can use thunks, sagas, etc.
      ...middleware
    ),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);
//   // if using persistedState:
//   // store.subscribe(throttle(() => {
//   //   // console.log('current state (store.js): ', store.getState());
//   //   saveState({
//   //    randomState
//   //   });
//   // }), 1000);

sagaMiddleware.run(rootSaga);

export default store;
