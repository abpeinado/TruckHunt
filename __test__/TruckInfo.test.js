// import React from 'react';
// import { shallow } from 'enzyme';
// import { Provider } from 'react-redux';
// import configureStore from '../client/src/store/configureStore.js';
// import TruckInfo from '../client/src/components/TruckInfo';

// describe('TruckInfo Component Test', () => {
//   let truckInfo;

//   beforeEach(() => {
//     const store = configureStore();
//     truckInfo = shallow(
//       <Provider store={store}>
//         <TruckInfo />
//       </Provider>
//     );
//   });

//   it('should find create truckinfo component', () => {
//     expect(truckInfo.exists()).toBe(true);
//   });
// });
const sum = (a, b) => (a + b);

describe('Example unit test', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

