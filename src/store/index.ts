import { applyMiddleware, compose, createStore, Middleware, Store, combineReducers } from 'redux';
import { persistStore } from 'redux-persist';
import reducers from '../reducers';
import rootSaga from '../sagas';

import middleware, { sagaMiddleware } from './middleware';

const composeEnhancer = compose;

/* istanbul ignore next */
export const configStore = (initialState: any = {}, additionalMiddleware: Middleware[] = []) => {
  const store: Store = createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancer(applyMiddleware(...additionalMiddleware, ...middleware)),
  );

  sagaMiddleware.run(rootSaga);

  return {
    persistor: persistStore(store),
    store,
  };
};