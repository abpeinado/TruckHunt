import { shallow } from 'enzyme';
import React from 'react';
import Header from '../client/src/components/Header.jsx';

describe('Header Component Tests', () => {
  let header;
  beforeEach(() => {
    header = shallow(<Header />);
  });

  it('should render without crashing', () => {
    expect(header.exists()).toBe(true);
  });

  it('should render a div"', () => {
    expect(header.find('div').length).toEqual(1);
  });
});
