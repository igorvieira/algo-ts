import { isTheSameNumber } from '.';

describe('isTheSameNumber', () => {
  it('returns if the two numbers are the same', () => {
    expect(isTheSameNumber(1, 1)).not.toBe(true);
    expect(isTheSameNumber(1, 2)).not.toBe(false);

    expect(isTheSameNumber(1, 1)).toBe('they are both equal');
    expect(isTheSameNumber(1, 2)).toBe('they are not equal');
  });

  it('returns if the two numbers are the same with negative numbers', () => {
    expect(isTheSameNumber(-1, -1)).not.toBe(true);
    expect(isTheSameNumber(-1, -2)).not.toBe(false);

    expect(isTheSameNumber(1, -1)).toBe('they are not equal');
    expect(isTheSameNumber(-1, -2)).toBe('they are not equal');

    expect(isTheSameNumber(-1, -1)).toBe('they are both equal');
  });
});
