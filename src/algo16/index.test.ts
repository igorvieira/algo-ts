import { calculateWeighedAverage } from '.';

describe('calculateWeighedAverage', () => {
  it('calculate the correct average of this three numbers, 10, 9, 8.5', () => {
    expect(calculateWeighedAverage(10, 9, 8.5)).not.toBe('');
    expect(calculateWeighedAverage(10, 9, 8.5)).toBe('8.95');
  });

  it('calculate the correct average of this three numbers, -10, -9, -8.5', () => {
    expect(calculateWeighedAverage(-10, -9, -8.5)).not.toBe('');
    expect(calculateWeighedAverage(-10, -9, -8.5)).toBe('8.95');
  });
});
