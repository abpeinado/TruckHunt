import React from 'react';
import { shallow } from 'enzyme';
import TruckInfo from '../client/src/components/TruckInfo';

describe('TruckInfo Component Test', () => {
  let truckInfo;

  beforeEach(() => {
    truckInfo = shallow(
        <TruckInfo />
    );
  });

  it('should find TruckInfoclass', () => {
    expect(truckInfo.exists()).toBe(true);
  });
});
