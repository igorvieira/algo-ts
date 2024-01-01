import { addTwoNumbers } from '.';

describe('addTwoNumbers', () => {
  it('returns 4 when adding 2 and 2', () => {
    expect(addTwoNumbers(2, 2)).toBe(4);
  });

  it('returns 5 when adding 15 and -10', () => {
    expect(addTwoNumbers(15, -10)).toBe(5);
  });

  it('does not return 7 when adding 2 and 3', () => {
    expect(addTwoNumbers(2, 3)).not.toBe(7);
  });
});
