import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../client/src/store/configureStore.js';
import { TruckMenuComponent } from '../../client/src/containers/TruckMenu';

describe('TruckMenu Components Test', () => {
  const store = configureStore();

  it('should create a TruckMenu component', () => {
    const TruckMenu = shallow(
      <Provider store={store}>
        <TruckMenuComponent />
      </Provider>);
    expect(TruckMenu.find('TruckMenuClass')).toBeDefined();
  });
});
