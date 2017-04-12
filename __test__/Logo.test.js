import { mount } from 'enzyme';
import React from 'react';
import Logo from '../client/src/components/Logo.jsx';

describe('Search Components Test', () => {
  test('Search has className search', () => {
    const logo = mount(
      <Logo />
    );
    const div = logo.find('.logo-img');
    expect(div.length).toBe(1);
  });

/*  test('Redirect to homepage on click', () => {
    const logo = mount(
      <Logo />
    );

  });*/
});
