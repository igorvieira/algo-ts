import { isHigher } from '.';

describe('isHigher', () => {
  it('returns n1 hiegher then n2', () => {
    expect(isHigher(10, 9)).toBe('10 is higher then 9');
  });

  it('returns n2 hiegher then n1', () => {
    expect(isHigher(9, 10)).toBe('10 is higher then 9');
  });

  it('returns n2 equals then n1', () => {
    expect(isHigher(10, 10)).toBe('equals');
    expect(isHigher(-10, -10)).toBe('equals');
  });
});
