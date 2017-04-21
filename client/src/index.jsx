import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import App from './components/LandingPage.jsx';
import configureStore from './store/configureStore.js';

// Browser history for Router
const history = createHistory();

// initialState here for Redux:
const store = configureStore();

render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router >,
  document.getElementById('app'));
