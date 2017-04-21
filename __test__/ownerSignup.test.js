import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../client/src/store/configureStore.js';
import Signup from '../client/src/containers/VendorSignup.jsx';

describe('Signup Components Test', () => {
  const store = configureStore();

  test('Signup has className formWrapper', () => {
    const signup = mount(
      <Provider store={store}>
        <Signup />
      </Provider>
      );
    const VendorSignup = signup.find('.VendorSignup');
    it('should find Vendor Signup Form component', () => {
      expect(VendorSignup.exists()).toBe(true);
    });
  });
});
