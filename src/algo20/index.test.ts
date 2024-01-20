import { calculateTheHarmonicaAverage } from '.';

describe('calculateTheHarmonicaAverage', () => {
  it('returns the average of the harmonica', () => {
    expect(calculateTheHarmonicaAverage(2, 3, 4)).not.toBe(3);
    expect(calculateTheHarmonicaAverage(2, 3, 4)).not.toBe('2.77');
    expect(calculateTheHarmonicaAverage(2, 3, 4)).toBe(2.77);
  });

  it('returns the average of the harmonica with negative numbers', () => {
    expect(calculateTheHarmonicaAverage(-2, -3, -4)).toBe(2.77);
  });
});
