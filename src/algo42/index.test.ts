import { sumNumbersFromOneToHundred } from '.';

describe('sumNumbersFromOneToHundred', () => {
  it('calculates the sum correctly', () => {
    const EXPECTED_VALUE = (100 * 101) / 2;

    console.log(sumNumbersFromOneToHundred(), EXPECTED_VALUE);
    expect(sumNumbersFromOneToHundred()).toBe(EXPECTED_VALUE);
  });
});
