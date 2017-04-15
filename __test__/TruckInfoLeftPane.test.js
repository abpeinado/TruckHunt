import React from 'react';
import { shallow } from 'enzyme';
import TruckInfoLeftPane from '../client/src/components/TruckInfoLeftPane';

describe('TruckInfoLeftPane Component Tests', () => {
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
