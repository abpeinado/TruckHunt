import React from 'react';
import { shallow } from 'enzyme';
import configureStore from '../client/src/store/configureStore.js';
import Cart from '../client/src/components/Cart';

describe('Cart Component Test', () => {
  let cart;

  beforeEach(() => {
    cart = shallow(
        <Cart />
    );
  });

  it('should find create Cart component', () => {
    expect(cart.exists()).toBe(true);
  });
});
