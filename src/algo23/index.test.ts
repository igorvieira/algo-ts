import { checkTheCurrentNumber } from '.';

describe('checkTheCurrentNumber', () => {
  it('return if this is a negative number', () => {
    expect(checkTheCurrentNumber(-1)).toBe('negative');
    expect(checkTheCurrentNumber(-1)).not.toBe('positive');
    expect(checkTheCurrentNumber(-1)).not.toBe('zero');
  });

  it('return if this is a postive number', () => {
    expect(checkTheCurrentNumber(1)).not.toBe('negative');
    expect(checkTheCurrentNumber(1)).toBe('positive');
    expect(checkTheCurrentNumber(1)).not.toBe('zero');
  });

  it('return if this is a zero', () => {
    expect(checkTheCurrentNumber(0)).not.toBe('negative');
    expect(checkTheCurrentNumber(0)).not.toBe('positive');
    expect(checkTheCurrentNumber(0)).toBe('zero');
  });
});
