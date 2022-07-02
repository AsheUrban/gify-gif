import exampleFunction from './../src/exampleFunction.js';

describe('test message', () => {
  test('return string', () => {
    expect(exampleFunction()).toEqual(`hi, i'm a test!'`);
  });
});