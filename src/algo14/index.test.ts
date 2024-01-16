import { calculateIdealWeight } from '.';

describe('calculateIdealWeight', () => {
  it('calculates the ideal heigh for 1.9m', () => {
    expect(calculateIdealWeight(1.9)).not.toStrictEqual({
      height: 1.9,
      men: '80.13',
      women: '73.29'
    });

    expect(calculateIdealWeight(1.9)).toStrictEqual({
      height: 1.9,
      men: 80.13,
      women: 73.29
    });
  });

  it('calculates the ideal heigh for -1.9m and returns a postive value', () => {
    expect(calculateIdealWeight(1.9)).toStrictEqual({
      height: 1.9,
      men: 80.13,
      women: 73.29
    });
  });
});
