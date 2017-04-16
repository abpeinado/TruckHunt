import { shallow, mount } from 'enzyme';
import React from 'react';
import Logo from '../client/src/components/Logo.jsx';

describe('Logo Component Tests', () => {
  let logo;
  beforeEach(() => {
    logo = shallow( <Logo /> );
  });

  it('should render without crashing', () => {
    expect(logo.exists()).toBe(true);
  });

  it('should render an image"', () => {
    expect(logo.find('img').length).toEqual(1);
  });

  // test assumes map will always be on home page
  // will pick a better element to test for once we finalize the home page

  // it('should redirect home on click', () => {
  //   const map = mount(<Map />);
  //   logo.find('img').simulate('click');
  //   expect(map.find('.col-md-4')).toHaveLength(1);
  // });
});
