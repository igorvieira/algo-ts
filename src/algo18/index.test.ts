import { calculateBill } from '.';

describe('calculateBill', () => {
  it('caculates some bill with value of 100 reais', () => {
    expect(calculateBill(100)).not.toBe(110);
    expect(calculateBill(100)).toStrictEqual({
      bill: 100,
      tip: 110
    });
  });

  it('caculates some bill with value of 250.5 reais', () => {
    expect(calculateBill(250.5)).not.toBe(275.55);
    expect(calculateBill(250.5)).toStrictEqual({
      bill: 250.5,
      tip: 275.55
    });
  });

  it('caculates some bill with value of -250.5 reais', () => {
    expect(calculateBill(-250.5)).not.toBe(275.55);
    expect(calculateBill(-250.5)).toStrictEqual({
      bill: 250.5,
      tip: 275.55
    });
  });
});
