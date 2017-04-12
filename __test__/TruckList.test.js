import { shallow } from 'enzyme';
import React from 'react';
// import renderer from 'react-test-renderer';
import TruckList from '../client/src/components/TruckList';

const sum = (a, b) => (a + b); // example function (import ./server/sum.js)


describe('App Components Test', () => {

  test('find trucklistclass', () => {
    const TruckListWrapper = shallow(<TruckList />);
    console.log('WRAPPER---------------------->', TruckListWrapper.find('TruckListWrapper.node.props.className').exists());


    expect(TruckListWrapper.find('TruckListWrapper.node.props.className').exists()).toEqual(false);
  });

  test('list has data to map', () => {
    const TruckListWrapper = shallow(<TruckList />);
    console.log('WRAPPER---------------------->', TruckListWrapper.find('TruckListWrapper.node.props.className').exists());
    expect(TruckListWrapper.find('TruckListWrapper.node.props.className').exists()).toEqual(false);
  });
});
