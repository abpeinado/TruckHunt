import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../client/src/store/configureStore.js';
import React from 'react';
import TruckList from '../client/src/components/TruckList';

describe('App Components Test', () => {
  const store = configureStore();

  test('find trucklistclass', () => {
    const TruckListWrapper = shallow(
      <Provider store={store}>
        <TruckList />
      </Provider>);
    expect(TruckListWrapper.find('truckListClass')).toBeDefined();
  });
});
