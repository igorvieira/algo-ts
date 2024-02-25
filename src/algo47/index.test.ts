import { getPrimesUpToNumber } from '.';

describe('getPrimesUpToNumber', () => {
  it('getting prime numbers up to 10 correclty', () => {
    expect(getPrimesUpToNumber(10)).toStrictEqual([2, 3, 5, 7]);
  });

  it('getting prime numbers up to 20 correclty', () => {
    expect(getPrimesUpToNumber(20)).toStrictEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});
