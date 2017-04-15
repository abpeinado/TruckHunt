import React from 'react';
import { mount } from 'enzyme';
import TruckMenuItem from '../client/src/components/TruckMenuItem';

describe('TruckMenuItem Component Test', () => {
  let truckMenuItem;
  const item = {
    name: 'salad',
    description: 'lettuce, cucumber and some dressing',
    price: '$5.99'
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
    console.log('text', text);
    expect(text).toContain(item.name);
    expect(text).toContain(item.description);
    expect(text).toContain(item.price);
  });

  it('should set the title based on props', () => {
    const name = truckMenuItem.find('h5');
    expect(name.text()).toContain('salad');
  });
});
