import { checkClassNote } from '.';

describe('checkClassNote', () => {
  it('returns some approved note', () => {
    expect(checkClassNote(9)).toBe('approved');
  });

  it('returns some approved note with 9.9', () => {
    expect(checkClassNote(9.9)).toBe('approved');
  });

  it('returns not allowed note', () => {
    expect(checkClassNote(-1)).toBe('not allowed');
    expect(checkClassNote(-1)).not.toBe('disapproved');
  });

  it('returns some disapproved note', () => {
    expect(checkClassNote(4)).toBe('disapproved');
  });
});
