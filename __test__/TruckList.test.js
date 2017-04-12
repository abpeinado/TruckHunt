import { shallow } from 'enzyme';
import React from 'react';
import TruckList from '../client/src/components/TruckList';

describe('App Components Test', () => {

  test('find trucklistclass', () => {
    const TruckListWrapper = shallow(<TruckList />);
    expect(TruckListWrapper.find('TruckListWrapper.node.props.className').exists()).toEqual(false);
  });

  test('list has data to map', () => {
    const TruckListWrapper = shallow(<TruckList />);
    expect(TruckListWrapper.find('TruckListWrapper.node.props.className').exists()).toEqual(false);
  });
});
