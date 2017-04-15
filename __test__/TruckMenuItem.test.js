import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../client/src/store/configureStore.js';
import TruckMenuItem from '../client/src/components/TruckMenuItem';

describe('TruckMenuItem Component Test', () => {
  let truckMenuItem;

  beforeEach(() => {
    const store = configureStore();
    truckMenuItem = shallow(
      <Provider store={store}>
        <TruckMenuItem />
      </Provider>
    );
  });

  it('should find create TruckMenuItem component', () => {
    expect(truckMenuItem.exists()).toBe(true);
  });
});
