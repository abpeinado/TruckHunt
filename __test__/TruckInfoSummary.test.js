import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../client/src/store/configureStore.js';
import TruckInfoSummary from '../client/src/components/TruckInfoSummary';

describe('TruckInfoSummary Component Test', () => {
  let truckInfoSummary;

  beforeEach(() => {
    const store = configureStore();
    truckInfoSummary = shallow(
      <Provider store={store}>
        <TruckInfoSummary />
      </Provider>
    );
  });

  it('should find create TruckInfoSummary component', () => {
    expect(truckInfoSummary.exists()).toBe(true);
  });
});
