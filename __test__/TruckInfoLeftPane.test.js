// import React from 'react';
// import { shallow } from 'enzyme';
// import TruckInfoLeftPane from '../client/src/components/TruckInfoLeftPane';

// describe('TruckInfoLeftPane Component Tests', () => {
//   let truckInfoLeftPane;

//   beforeEach(() => {
//     truckInfoLeftPane = shallow(
//       <TruckInfoLeftPane />
//     );
//   });

//   it('should create a TruckInfoLeftPane dom element', () => {
//     expect(truckInfoLeftPane.exists()).toBe(true);
//   });

// });

const sum = (a, b) => (a + b);

describe('Example unit test', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

