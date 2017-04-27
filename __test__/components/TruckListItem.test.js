import React from 'react';
import renderer from 'react-test-renderer';
import TruckListItem from '../../client/src/components/TruckListItem.jsx';

const restaurant = {
  vendor_id: 5,
  vendor_name: 'BH & MT LLC',
  food_category: 'Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages',
  phone_number: null,
  day_of_week: 1,
  start_time: 11,
  end_time: 15,
  rating: 4
};

describe('CartItem Component Tests', () => {
  test('CartItem matches snapshot', () => {
    const component = renderer.create(<TruckListItem
      restaurant={restaurant}
    />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
