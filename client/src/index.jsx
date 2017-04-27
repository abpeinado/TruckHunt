import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import createHistory from 'history/createBrowserHistory';
import LandingPage from './containers/LandingPage.jsx';
import configureStore from './store/configureStore.js';

// Browser history for Router
const history = createHistory();

// initialState here for Redux:
const store = configureStore();

render(
  <Router history={history}>
    <Provider store={store}>
      <LocaleProvider locale={enUS}>
        <LandingPage />
      </LocaleProvider>
    </Provider>
  </Router>,
  document.getElementById('app'));
