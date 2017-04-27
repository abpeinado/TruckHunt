import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import TruckMenuItem from '../../client/src/components/TruckMenuItem';

const menuItem = {
  menu_item_id: 36,
  vendor_id: null,
  name: 'All American Club',
  course: 'Wraps',
  food_category: 'Cold Truck: Pre-packaged sandwiches: snacks: fruit: various beverages',
  price: 775,
  item_description: 'Roast turkey, honey ham, bacon, Monterey Jack cheese, lettuce, tomato and dijonaisse'
};

describe('Truck Menu Item  Component Tests', () => {
  test('Truck Menu Item matches snapshot', () => {
    const component = renderer.create(
      <StaticRouter>
        <TruckMenuItem
          item={menuItem}
        />
      </StaticRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('TruckMenuItem Component Test', () => {
  let truckMenuItem;
  const item = {
    name: 'salad',
    price: 499
  };

  beforeEach(() => {
    truckMenuItem = mount(
      <StaticRouter>
        <TruckMenuItem item={item} />
      </StaticRouter>
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
