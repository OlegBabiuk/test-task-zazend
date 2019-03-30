import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/test-task-zazend">
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root'),
);

module.hot.accept();
