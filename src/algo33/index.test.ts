import { averageCategory } from '.';

describe('averageCategory', () => {
  it('returns invalid input', () => {
    expect(averageCategory(5, 6, -7)).toBe('invalid input');
  });

  it('return failed category', () => {
    expect(averageCategory(1, 4, 5)).toBe('failed');
  });

  it('return approved category', () => {
    expect(averageCategory(1, 5, 5)).toBe('approved');
  });
});
