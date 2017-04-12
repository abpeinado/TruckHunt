import { shallow } from 'enzyme';
import React from 'react';
// import renderer from 'react-test-renderer';
import App from '../client/src/components/App';

const sum = (a, b) => (a + b); // example function (import ./server/sum.js)


describe('App Components Test', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  // // snapshot test - to update, run "npm run resnap"
  // // see https://facebook.github.io/jest/docs/snapshot-testing.html#content
  // test('app matches snapshot', () => {
  //   const component = renderer.create(<App />);
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  test('app contains header and trucklist', () => {
    const app = shallow(<App />);
    expect(app.text()).toContain('<Header');
    expect(app.text()).toContain('<TruckList');

    // expect(app.text()).toContain('<Header /><Map /><TruckList />');
  });
});
