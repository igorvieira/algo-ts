import { increasePaycheck } from '.';

describe('incrasePaycheck', () => {
  it('return invalid error messge when the paycheck is less then 0', () => {
    expect(increasePaycheck(-1)).toBe('invalid amount');
  });

  it('returns 20% when the paycheck is 1200 reais', () => {
    expect(increasePaycheck(1200)).not.toBe('1440');
    expect(increasePaycheck(1200)).toStrictEqual({
      newPaycheck: 1440,
      paycheck: 1200
    });
  });

  it('returns 10% when the paycheck is 2500 reais', () => {
    expect(increasePaycheck(2500)).not.toBe('2750');
    expect(increasePaycheck(2500)).toStrictEqual({
      newPaycheck: 2750,
      paycheck: 2500
    });
  });
});
