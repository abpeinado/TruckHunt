import { mount } from 'enzyme';
import React from 'react';
import Search from '../client/src/components/Search.jsx';

describe('Search Component Tests', () => {
  let search;
  beforeEach(() => {
    search = mount(<Search />);
  });

  it('should render without crashing', () => {
    expect(search.exists()).toBe(true);
  });

  it('should render a form"', () => {
    expect(search.find('.form-group').length).toEqual(1);
  });

  it('should render a button"', () => {
    expect(search.find('button').length).toEqual(1);
  });
});
