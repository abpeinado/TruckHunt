import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import CartItem from '../../client/src/components/CartItem.jsx';

describe('CartItem Component Tests', () => {
  // snapshot test - to update, run "jest --updateSnapshot"
  // see https://facebook.github.io/jest/docs/snapshot-testing.html#content
  test('CartItem matches snapshot', () => {
    const component = renderer.create(<CartItem
      name="Burrito"
      price="699"
      quantity="1"
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // test('CartItem has Burrito text', () => {
  //   const cartItem = mount(<CartItem />);
  //   expect(cartItem.text()).toEqual('Burrito');
  // });
});
