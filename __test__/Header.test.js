// import { shallow } from 'enzyme';
// import React from 'react';
// import Header from '../client/src/components/Header.jsx';

// describe('Header Component Tests', () => {
//   let header;
//   beforeEach(() => {
//     header = shallow(<Header />);
//   });

//   it('should render without crashing', () => {
//     expect(header.exists()).toBe(true);
//   });

//   it('should render a div"', () => {
//     expect(header.find('Menu').length).toEqual(1);
//   });
// });
const sum = (a, b) => (a + b);

describe('Example unit test', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
