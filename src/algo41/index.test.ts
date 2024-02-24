import { addNumbersFromOneToTheLimit } from '.';

describe('addNumbersFromOneToTheLimit', () => {
  it('invalid number', () => {
    expect(addNumbersFromOneToTheLimit(-1)).toBe('invalid number');
  });

  it('gets the numbers 1 to 10', () => {
    const EXPECTED_VALUE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(addNumbersFromOneToTheLimit(10).length).toBe(10);
    expect(addNumbersFromOneToTheLimit(10)).toStrictEqual(EXPECTED_VALUE);
  });
});
