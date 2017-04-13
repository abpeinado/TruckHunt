import { mount } from 'enzyme';
import React from 'react';
import Header from '../client/src/components/Header.jsx';

describe('Header Component Tests', () => {
  test('Header component renders', () => {
    const header = mount(
      <Header />
    );
    const div = header.find('.NavbarStyled');
    expect(div.length).toBe(1);
  });
});
