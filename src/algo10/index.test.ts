import { calculateDollarToReal } from '.';

describe('calculateDollarToReal', () => {
  it('caculate the amount in reais with dollar in 4,89 and the amount in 3500', () => {
    expect(calculateDollarToReal(4.89, 3500)).toBe(17115);
  });

  it('caculate the amount in reais with dollar in -4,89 and the amount in -3500 returning a postive value', () => {
    expect(calculateDollarToReal(-4.89, -3500)).not.toBe(-17115);
    expect(calculateDollarToReal(-4.89, -3500)).toBe(17115);
  });
});
