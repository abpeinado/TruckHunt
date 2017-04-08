// normally 'sum' would be within a seperate file on the server that you would require here
const sum = (a, b) => (a + b); // example function (import ./server/sum.js)

describe('Example unit test', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
