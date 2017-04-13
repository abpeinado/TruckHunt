import { shallow } from 'enzyme';
import React from 'react';
import Search from '../client/src/components/Search.jsx';

describe('Search Component Tests', () => {
  let search;
  beforeEach(() => {
    search = shallow(<Search />);
  });

  it('should render without crashing', () => {
    expect(search.exists()).toBe(true);
  });
});
