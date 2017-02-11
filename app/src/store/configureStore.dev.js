import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise';
import reducer from '../reducers';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise, thunk, logger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
