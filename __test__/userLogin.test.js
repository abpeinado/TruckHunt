import { mount } from 'enzyme';
import React from 'react';
import Login from '../client/src/components/UserLogin.jsx';

describe('login Components Test', () => {
  test('login has className formWrapper', () => {
    const login = mount(
      <Login />
      );
    const div = login.find('.formWrapper');
    expect(div.length).toBe(1);
  });
});
