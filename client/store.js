/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit';
// import reducers from './reducers/index';
import marketsReducer from './reducers/marketsReducer';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
// const store = createStore(
//   reducers,
//   composeWithDevTools()
// );

const store = configureStore({
  reducer: {
    markets: marketsReducer,
  },
});

export default store;