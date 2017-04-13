import { shallow } from 'enzyme';
import React from 'react';
import Logo from '../client/src/components/Logo.jsx';

describe('Logo Component Tests', () => {
  let logo;
  beforeEach(() => {
    logo = shallow(<Logo />);
  });

  it('should render without crashing', () => {
    expect(logo.exists()).toBe(true);
  });

  it('should render an image"', () => {
    expect(logo.find('img').length).toEqual(1);
  });
});
