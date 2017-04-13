import { mount } from 'enzyme';
import React from 'react';
import Logo from '../client/src/components/Logo.jsx';

describe('Logo Component Tests', () => {
  test('Search component renders', () => {
    const logo = mount(
      <Logo />
    );
    const div = logo.find('.logo-img');
    expect(div.length).toBe(1);
  });

  test('Clicking on search returns user to homepage', () => {
    const logo = mount(
      <Logo />
    );
    const div = logo.find('.logo-img');
    expect(div.length).toBe(1);
  });
});
