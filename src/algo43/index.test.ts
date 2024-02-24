import { addNumbersFromTwoToTwenty } from '.';

describe('addNumbersFromTwoToTwenty', () => {
  it('shows the numbers between two and twenty', () => {
    const EXPECTED_VALUE = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    expect(addNumbersFromTwoToTwenty()).toStrictEqual(EXPECTED_VALUE);
  });

  it('shows only even numbers', () => {
    const evenNumbers = addNumbersFromTwoToTwenty();

    for (const num of evenNumbers) {
      expect(num % 2).toBe(0);
    }
  });

  it('does not contain odd numbers', () => {
    const evenNumbers = addNumbersFromTwoToTwenty();

    for (const num of evenNumbers) {
      expect(num % 2).not.toBe(1);
    }
  });
});
