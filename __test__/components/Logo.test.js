import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import Logo from '../../client/src/components/Logo.jsx';


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

  test('Logo matches snapshot', () => {
    const component = renderer.create(
      <StaticRouter>
        <Logo />
      </StaticRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
