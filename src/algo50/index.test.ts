import { fibonacciSequence } from '.';

describe('fibonacciSequence', () => {
  it('prints the first fibonacci term correlty', () => {
    expect(fibonacciSequence(1)).toStrictEqual([0, 1]);
  });

  it('prints the two fibonacci term correlty', () => {
    expect(fibonacciSequence(2)).toStrictEqual([0, 1]);
  });

  it('prints the first ten Fibonacci terms correlty', () => {
    expect(fibonacciSequence(10)).toStrictEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34
    ]);
  });
});
