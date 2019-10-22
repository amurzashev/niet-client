/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const isChrome = (typeof window.chrome === 'object' && navigator.appVersion.indexOf('Edge') === -1);
const composeEnhancer = (process.env.NODE_ENV === 'development' && isChrome) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const enhancer = composeEnhancer(applyMiddleware(thunk));
const store = createStore(rootReducer, {}, enhancer);

export default store;
