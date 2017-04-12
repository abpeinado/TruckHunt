import { mount } from 'enzyme';
import React from 'react';
import Search from '../client/src/components/Search.jsx';

describe('Search Components Test', () => {
  test('Search has className search', () => {
    const search = mount(
      <Search />
      );
    const div = search.find('.form-group');
    expect(div.length).toBe(1);
  });
});
