import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../client/src/store/configureStore.js';
import TruckMenuGroup from '../client/src/components/TruckMenuGroup';

describe('TruckMenuGroup Component Test', () => {
  let truckMenuGroup;

  beforeEach(() => {
    const store = configureStore();
    truckMenuGroup = shallow(
      <Provider store={store}>
        <TruckMenuGroup />
      </Provider>
    );
  });

  it('should find create TruckMenuGroup component', () => {
    expect(truckMenuGroup.exists()).toBe(true);
  });
});
