import React from 'react';
import renderer from 'react-test-renderer';
import { mount, render } from 'enzyme';
import App from '../client/app/index';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <App />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

