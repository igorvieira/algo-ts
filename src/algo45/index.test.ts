import { sumNumbers } from '.';

describe('sumNumbers', () => {
  it('sums the numbers until encontering a negative number', () => {
    expect(sumNumbers([10, 20, 10, 30, -5, 15])).toBe(70);
  });

  it('sums the numbers in a empty array equals 0', () => {
    expect(sumNumbers([])).toBe(0);
  });

  it('shows the result like 0 for a unique negative value in this array', () => {
    expect(sumNumbers([-1])).toBe(0);
  });

  it('shows the value of one element', () => {
    expect(sumNumbers([5])).toBe(5);
  });

  it('returns 0 if the first number in this list is negative number', () => {
    expect(sumNumbers([-1, 2, 3, 4])).toBe(0);
  });
});
