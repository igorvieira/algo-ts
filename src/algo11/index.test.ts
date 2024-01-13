import { calculateIncreasePaycheck } from '.';

describe('calculateIncreasePaycheck', () => {
  it('calculate the new paycheck (2500) with 15% increase', () => {
    expect(calculateIncreasePaycheck(15, 2500)).not.toBe(2875);
    expect(calculateIncreasePaycheck(15, 2500)).toStrictEqual({
      newPaycheck: 2875,
      paycheck: 2500
    });
  });

it('calculate the new paycheck (-2500) with -15% increase and return the correct value', () => {
    expect(calculateIncreasePaycheck(-15, -2500)).not.toBe(2875);
    expect(calculateIncreasePaycheck(-15, -2500)).toStrictEqual({
      newPaycheck: 2875,
      paycheck: 2500
    });
  });
});
