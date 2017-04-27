/* eslint-disable react/jsx-filename-extension */

import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../client/src/store/configureStore.js';
import Search from '../../client/src/containers/Search.jsx';

describe('Search Component Test', () => {
  let search;

  beforeEach(() => {
    const store = configureStore();
    search = shallow(
      <Provider store={store}>
        <Search />
      </Provider>
    );
  });

  it('should find search component', () => {
    expect(search.exists()).toBe(true);
  });
});
