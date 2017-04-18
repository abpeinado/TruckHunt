import React from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import ConsumerHomepage from './components/ConsumerHomepage.jsx';
import VendorHomepage from './components/VendorHomepage.jsx';
import VendorSignup from './components/VendorSignup.jsx';
import Signup from './components/Signup.jsx';
import TruckInfo from './components/TruckInfo.jsx';
import Login from './components/Login.jsx';
import Authenticate from './components/AuthenticationPortal.jsx';
import configureStore from './store/configureStore.js';

// browser history
const history = createHistory();

// can pass in an initialState here if necessary:
const store = configureStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={ConsumerHomepage} />
        <Route path="/vendorManagement" component={VendorHomepage} />
        <Route path="/truckMenu" component={TruckInfo} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/vendorSignup" component={VendorSignup} />
        <Route path="/authenticate" component={Authenticate} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
