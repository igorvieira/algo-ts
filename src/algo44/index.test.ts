import { factorial } from '.';

describe('factorial', () => {
  it('calculates the factorial of 0 as 1', () => {
    expect(factorial(0)).toBe(1);
  });

  it('calculates the factorial of 1 as 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('calculates the factorial of 5 as 120', () => {
    expect(factorial(5)).toBe(120);
  });

  it('throw an error message for negative numbers', () => {
    expect(() => factorial(-5)).toThrowError(
      'Factorial is not defined for negative numbers'
    );
  });
});
