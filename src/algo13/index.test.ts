import { beforeAfterNumber } from '.';

describe('beforeAfterNumber', () => {
  it('calculate the before and after of number 8', () => {
    expect(beforeAfterNumber(8)).toStrictEqual({
      after: 9,
      before: 7,
      num: 8
    });

    expect(beforeAfterNumber(8)).not.toStrictEqual({});
  });

  it('calculate the before and after of number -8', () => {
    expect(beforeAfterNumber(-8)).toStrictEqual({
      after: -7,
      before: -9,
      num: -8
    });
  });
});
