import { triangleType } from '.';

describe('triangleType function', () => {
  it('returns "invalid data" when any side is less than 0', () => {
    expect(triangleType(-1, 2, 3)).toBe('invalid data');
    expect(triangleType(1, -2, 3)).toBe('invalid data');
    expect(triangleType(1, 2, -3)).toBe('invalid data');
  });

  it('returns "not a triangle" when the sum of any two sides is less than or equal to the third side', () => {
    expect(triangleType(1, 1, 3)).toBe('not a triangle');
    expect(triangleType(1, 3, 1)).toBe('not a triangle');
    expect(triangleType(3, 1, 1)).toBe('not a triangle');
  });

  it('returns "equilateral" when all sides are equal', () => {
    expect(triangleType(2, 2, 2)).toBe('equilateral');
  });

  it('returns "isosceles" when two sides are equal', () => {
    expect(triangleType(3, 3, 2)).toBe('isosceles');
    expect(triangleType(3, 2, 3)).toBe('isosceles');
    expect(triangleType(2, 3, 3)).toBe('isosceles');
  });

  it('returns "scalene" when no sides are equal', () => {
    expect(triangleType(3, 4, 5)).toBe('scalene');
  });
});
