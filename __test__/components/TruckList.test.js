import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from '../../client/src/store/configureStore.js';
import TruckList from '../../client/src/containers/TruckList';

describe('App Components Test', () => {
  const store = configureStore();

  test('find trucklistclass', () => {
    const TruckListWrapper = shallow(
      <Provider store={store}>
        <TruckList />
      </Provider>);
    expect(TruckListWrapper.find('TruckListClass')).toBeDefined();
  });
});
