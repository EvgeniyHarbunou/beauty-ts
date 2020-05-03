import React from 'react';
import ReactDOM from 'react-dom';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import { Provider } from 'react-redux';
import dates, { datesSaga } from './redux/dates';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const reducer = {
  dates,
};

function* rootSaga() {
  yield all([datesSaga()]);
}

const initialiseSagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware(), initialiseSagaMiddleware];
if (process.env.NODE_ENV === `development`) {
  middleware.push(logger);
}
const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

initialiseSagaMiddleware.run(rootSaga);



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
