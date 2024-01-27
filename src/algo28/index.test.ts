import { canFormTriangle } from '.';

describe('canFormTringule', () => {
  it('returns true for this three numbers 2, 2 and 1', () => {
    expect(canFormTriangle(2, 2, 1)).toBe(true);
  });

  it('returns false for this three numbers 1, 2 and 3', () => {
    expect(canFormTriangle(1, 2, 3)).toBe(false);
  });
});
