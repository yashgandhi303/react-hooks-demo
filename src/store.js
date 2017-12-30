import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import rootSaga from './sagas';

// thunks:
import thunk from 'redux-thunk';
// sagas:
import createSagaMiddleware from 'redux-saga';

// import throttle from 'lodash/throttle';
import rootReducer from './reducers/root_reducer';
// import { loadState, saveState } from './localStorage';
const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger();


const store = createStore(
  rootReducer,
  // persistedState,
  compose(
    applyMiddleware( // can use thunks, sagas, etc.
      thunk,
      sagaMiddleware,
      loggerMiddleware
    ),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(rootSaga);

export default store;


// const configureStore = () => {

//   // const persistedState = loadState();

//   const store = createStore(
//     rootReducer,
//     // persistedState,
//     compose(
//       applyMiddleware( // can use thunks, sagas, etc.
//         // thunk,
//         sagaMiddleware,
//         loggerMiddleware
//       ),
//       typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
//     )
//   );

//   // if using persistedState:
//   // store.subscribe(throttle(() => {
//   //   // console.log('current state (store.js): ', store.getState());
//   //   saveState({
//   //    randomState
//   //   });
//   // }), 1000);

//   return store;
// }

// sagaMiddleware.run(rootSaga);

// export default configureStore;
