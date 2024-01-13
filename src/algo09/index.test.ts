import { swapContext } from '.';

describe('swapContext', () => {
  it('return a = 10 and b = 5', () => {
    expect(swapContext(5, 10)).toStrictEqual({
      a: 10,
      b: 5
    });
  });

  it('return a = -10 and b = -5', () => {
    expect(swapContext(-5, -10)).not.toStrictEqual({
      a: 10,
      b: 5
    });

    expect(swapContext(-5, -10)).toStrictEqual({
      a: -10,
      b: -5
    });
  });
});
