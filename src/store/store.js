import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import thunk from 'redux-thunk';
import storageOptions from './storage';
import * as reducers from './reducer';
import Logger from '../utils/loggers';

const PURGE_STORAGE = false;
const middlewares = [thunk, Logger.storeLogger()];

export const Store = (onComplete = () => {}) => {
  let store = null;
  const reducer = persistCombineReducers(storageOptions, reducers);
  const enhancer = compose(applyMiddleware(...middlewares));
  store = createStore(reducer, enhancer);

  const persistor = persistStore(store, null, () => onComplete(store));
  if (PURGE_STORAGE) {
    persistor.purge();
  }

  return store;
};

export default Store;
