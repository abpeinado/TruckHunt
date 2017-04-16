import React from 'react';
import { shallow } from 'enzyme';
import configureStore from '../client/src/store/configureStore.js';
import Cart from '../client/src/components/Cart';

describe('Cart Component Test', () => {
  const items = [
    {
      name: 'French Fries',
      description: 'yummy homemade fries',
      price: 1.99
    },
    {
      name: 'Hummus',
      description: 'served with pita bread',
      price: 4.99
    },
    {
      name: 'Chicken Wings',
      description: 'with celery sticks and blue cheese sauce',
      price: 5.99
    },
    {
      name: 'Onion Rings',
      description: 'beer battered and served with chipotle mayo',
      price: 4.99
    }
  ];

  let cart;

  beforeEach(() => {
    cart = shallow(
      <Cart items={items} />
    );
  });

  it('should create Cart component', () => {
    expect(cart.exists()).toBe(true);
  });
});
