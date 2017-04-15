import { mount } from 'enzyme';
import React from 'react';
import Login from '../client/src/components/VendorLogin.jsx';

describe('login Components Test', () => {
  test('login has className formWrapper', () => {
    const login = mount(
      <Login />
      );
    const VendorLogin = login.find('.VendorLogin');
    it('should find create truckinfo component', () => {
      expect(VendorLogin.exists()).toBe(true);
    });
  });
});
