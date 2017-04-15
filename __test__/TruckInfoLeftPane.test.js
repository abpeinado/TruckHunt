import React from 'react';
import { shallow } from 'enzyme';
// import { Provider } from 'react-redux';
// import configureStore from '../client/src/store/configureStore.js';
import TruckInfoLeftPane from '../client/src/components/TruckInfoLeftPane';

describe('TruckInfoLeftPane Component Tests', () => {
  // const store = configureStore();
  let truckInfoLeftPane;

  beforeEach(() => {
    truckInfoLeftPane = shallow(
      <TruckInfoLeftPane />
    );
  });

  it('should create a TruckInfoLeftPane dom element', () => {
    expect(truckInfoLeftPane.exists()).toBe(true);
  });

});
