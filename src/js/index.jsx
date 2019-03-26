import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './components/reducers';
import allSagas from './services';

import App from './components/App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
));
sagaMiddleware.run(allSagas);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/test-task-zazend">
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'),
);

module.hot.accept();
