import { isMultiple } from '.';

describe('isMultiple', () => {
  it('returns if 2 is multiple by 2', () => {
    expect(isMultiple(2, 2)).toBeTruthy();
  });

  it('returns if 5 is not multiple by 2', () => {
    expect(isMultiple(5, 2)).not.toBeTruthy();
    expect(isMultiple(5, 2)).toBeFalsy();
  });

  it('returns if 4.4 is multiple by 2.2', () => {
    expect(isMultiple(4.4, 2.2)).toBeTruthy();
  });

  it('returns if 4.2 is not multiple by 2.2', () => {
    expect(isMultiple(4.2, 2.2)).toBeFalsy();
  });

  it('returns if -4.4 is multiple by 2.2', () => {
    expect(isMultiple(-4.4, 2.2)).toBeTruthy();
  });
});
