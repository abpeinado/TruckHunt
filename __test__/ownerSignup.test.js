import { mount } from 'enzyme';
import React from 'react';
import Signup from '../client/src/components/OwnerSignup.jsx';

describe('Signup Components Test', () => {
  test('Signup has className formWrapper', () => {
    const signup = mount(
      <Signup />
      );
    const div = signup.find('.formWrapper');
    expect(div.length).toBe(1);
  });
});
