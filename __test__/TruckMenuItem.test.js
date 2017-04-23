import React from 'react';
import { mount } from 'enzyme';
import TruckMenuItem from '../client/src/components/TruckMenuItem';

describe('TruckMenuItem Component Test', () => {
  let truckMenuItem;
  const item = {
    name: 'salad',
    price: 499
  };

  beforeEach(() => {
    truckMenuItem = mount(
      <TruckMenuItem item={item} />
    );
  });

  it('should create a TruckMenuItem component', () => {
    expect(truckMenuItem.exists()).toBe(true);
  });

  it('should contain the name, description and price', () => {
    const text = truckMenuItem.text();
    expect(text).toContain(item.name);
  });
});
