import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from '../../client/src/store/configureStore.js';
import Header from '../../client/src/containers/Header.jsx';

describe('Header Component Tests', () => {
  const store = configureStore();

  let header;
  beforeEach(() => {
    header = shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  it('should render without crashing', () => {
    expect(header.exists()).toBe(true);
  });
});
