import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers/root_reducer';

import { isDev } from './constants/config';

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger();

const middleware = [
  thunk,
  sagaMiddleware,
  isDev && loggerMiddleware,
].filter(Boolean);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware( // can use thunks, sagas, etc.
      ...middleware
    ),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(rootSaga);

export default store;
