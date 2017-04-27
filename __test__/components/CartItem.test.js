import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import CartItem from '../../client/src/components/CartItem.jsx';

// snapshot test - to update, run "jest --updateSnapshot"
// see https://facebook.github.io/jest/docs/snapshot-testing.html#content
describe('CartItem Component Tests', () => {
  test('CartItem matches snapshot', () => {
    const component = renderer.create(<CartItem
      name="Burrito"
      price="699"
      quantity="1"
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
