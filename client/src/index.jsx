import React from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import ConsumerHomepage from './components/ConsumerHomepage.jsx';
import VendorHomepage from './components/VendorHomepage.jsx';
import TruckInfo from './components/TruckInfo.jsx';
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
        <Route path="/truckMenu" component={TruckInfo} />
        <Route path="/truckManagement" component={VendorHomepage} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
