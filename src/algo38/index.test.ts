import { isPerfectNumber } from '.';

describe('isPerfectNumber', () => {
  it('returns true for perfect number 28', () => {
    expect(isPerfectNumber(28)).toBeTruthy();
  });

  it('returns false for perfect number 12', () => {
    expect(isPerfectNumber(12)).toBeFalsy();
  });

  it('returns true for perfect number 6', () => {
    expect(isPerfectNumber(6)).toBeTruthy();
  });

  it('returns false for perfect number -28', () => {
    expect(isPerfectNumber(-28)).toBeFalsy();
  });
});
