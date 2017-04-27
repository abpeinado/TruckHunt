import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../client/src/store/configureStore.js';
import Login from '../../client/src/containers/Login.jsx';

describe('Login Components Test', () => {
  const store = configureStore();

  test('Login has className loginForm', () => {
    const signup = mount(
      <Provider store={store}>
        <Login />
      </Provider>
      );
    const VendorSignup = signup.find('.loginForm');
    it('should find Login Form component', () => {
      expect(VendorSignup.exists()).toBe(true);
    });
  });
});
