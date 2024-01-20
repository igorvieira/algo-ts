import { calculateHypotenuse } from '.';

describe('calculateHypotenuse', () => {
  it('calculates and returns the correct value of some hypotenuse with c1 and c2 equals 2', () => {
    expect(calculateHypotenuse(2, 2)).toStrictEqual({
      h: 2.83,
      c1: 4,
      c2: 4
    });
  });

  it('calculates and returns the correct value of some hypotenuse with c1 and c2 equals -2', () => {
    expect(calculateHypotenuse(-2, -2)).toStrictEqual({
      h: 2.83,
      c1: 4,
      c2: 4
    });
  });
});
