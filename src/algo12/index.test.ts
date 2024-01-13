import { productDiscount } from '.';

describe('calculateProductDiscount', () => {
  it('return 10% discount of 2500', () => {
    expect(productDiscount(10, 2500)).not.toBe(2250);
    expect(productDiscount(10, 2500)).toStrictEqual({
      discount: 10,
      newProductAmount: 2250,
      productAmount: 2500
    });
  });

  it('return -10% discount of -2500 and return the correct values', () => {
    expect(productDiscount(-10, -2500)).not.toBe(2250);
    expect(productDiscount(-10, -2500)).toStrictEqual({
      discount: -10,
      newProductAmount: 2250,
      productAmount: -2500
    });
  });
});
