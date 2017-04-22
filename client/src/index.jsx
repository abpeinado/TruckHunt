import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import App from './components/LandingPage.jsx';
import VendorHomepage from './components/VendorHomepage.jsx';
import TruckInfo from './components/TruckInfo.jsx';
import Authenticate from './components/AuthenticationPortal.jsx';
import configureStore from './store/configureStore.js';

// browser history
const history = createHistory();

// can pass in an initialState here if necessary:
const store = configureStore();

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router >,
  document.getElementById('app'));
