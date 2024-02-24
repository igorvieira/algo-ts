import { createAListOfSomeMultiplicationTable } from '.';

describe('createAListOfSomeMultiplicationTable', () => {
  it('returns throw error message of negative numbers', () => {
    expect(() => createAListOfSomeMultiplicationTable(-1)).toThrowError(
      'Invalid negative number'
    );
  });

  it('shows the multiplication table of 4 correclty', () => {
    expect(createAListOfSomeMultiplicationTable(4)).toStrictEqual([
      '1 * 4 = 4',
      '2 * 4 = 8',
      '3 * 4 = 12',
      '4 * 4 = 16',
      '5 * 4 = 20',
      '6 * 4 = 24',
      '7 * 4 = 28',
      '8 * 4 = 32',
      '9 * 4 = 36',
      '10 * 4 = 40'
    ]);
  });
});
