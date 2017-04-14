import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../client/src/store/configureStore.js';
import Signup from '../client/src/components/OwnerSignup.jsx';

describe('Signup Components Test', () => {
  const store = configureStore();

  test('Signup has className formWrapper', () => {
    const signup = mount(
      <Provider store={store}>
        <Signup />
      </Provider>
      );
    const div = signup.find('.formWrapper');
    expect(div.length).toBe(1);
  });
});
