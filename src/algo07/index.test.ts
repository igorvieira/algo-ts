import { calculateAreaSquare } from '.';

describe('calculateAreaSquare', () => {
  it('calculates area of 2', () => {
    expect(calculateAreaSquare(2)).toBe(4);
  });

  it('calculates area of -2', () => {
    expect(calculateAreaSquare(-2)).not.toBe(-4);
    expect(calculateAreaSquare(-2)).toBe(4);
  });
});
