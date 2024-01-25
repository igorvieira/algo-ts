import { isAMinor } from '.';

describe('isAMinor', () => {
  it('returns adult as response', () => {
    expect(isAMinor('19')).toBe('adult');
    expect(isAMinor('18')).toBe('adult');
  });

  it('returns minor as response', () => {
    expect(isAMinor('9')).toBe('minor');
  });

  it('returns some response for negative age', () => {
    expect(isAMinor('-1')).toBe('age not valid');
  });
});
