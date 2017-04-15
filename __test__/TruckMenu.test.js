import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../client/src/store/configureStore.js';
import TruckMenu from '../client/src/components/TruckMenu';

describe('TruckMenu Component Test', () => {
  let truckMenu;

  beforeEach(() => {
    const store = configureStore();
    truckMenu = shallow(
      <Provider store={store}>
        <TruckMenu />
      </Provider>
    );
  });

  it('should find create TruckMenu component', () => {
    expect(truckMenu.exists()).toBe(true);
  });
});
