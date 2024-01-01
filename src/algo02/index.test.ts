import { calculateAverage } from '.';

describe('calculateAverage', () => {
  it('returns the average of 2, 2, and 2 and should be 2', () => {
    expect(calculateAverage(2, 2, 2)).toBe(2);
    expect(calculateAverage(2, 2, 2)).not.toBe(4.6);
  });

  it('returns the average of 0, 0, and 0 and should be 0', () => {
    expect(calculateAverage(0, 0, 0)).toBe(0);
  });
});
