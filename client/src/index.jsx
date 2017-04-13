import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/App.jsx';
import configureStore from './store/configureStore.js';

// can pass in an initialState here if necessary
const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
