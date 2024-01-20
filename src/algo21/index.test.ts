import { oddOrEven } from '.';

describe('oddOrEven', () => {
  it('return some odd value', () => {
    expect(oddOrEven(2)).toBe('odd');
  });

  it('return some odd value with negative value', () => {
    expect(oddOrEven(-2)).toBe('odd');
  });

  it('return some even value', () => {
    expect(oddOrEven(3)).toBe('even');
  });

  it('return some even value with negative value', () => {
    expect(oddOrEven(-3)).toBe('even');
  });
});
