import { calculateTrianguleArea } from '.';

describe('calculateTrianguleArea', () => {
  it('calculates area with base 10, and height 2 returning 10', () => {
    const EXPECTED_VALUE = 10;
    expect(calculateTrianguleArea(10, 2)).toBe(EXPECTED_VALUE);
  });

  it('calculates area with base -2, and height 6 returning 6', () => {
    const EXPECTED_VALUE = 6;
    const NOT_EXPECTED = -6;

    expect(calculateTrianguleArea(-2, 6)).toBe(EXPECTED_VALUE);
    expect(calculateTrianguleArea(-2, 6)).not.toBe(NOT_EXPECTED);
  });

  it('calculates area with base 2.5, and height 3.5 returning 4.375', () => {
    const EXPECTED_VALUE = 4.375;
    const NOT_EXPECTED = 4375;

    expect(calculateTrianguleArea(2.5, 3.5)).toBe(EXPECTED_VALUE);
    expect(calculateTrianguleArea(2.5, 3.5)).not.toBe(NOT_EXPECTED);
  });
});
