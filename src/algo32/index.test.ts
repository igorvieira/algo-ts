import { ageCategory } from '.';

describe('ageCategory', () => {
  it('returns the invalid age', () => {
    expect(ageCategory(-1)).toBe('invalid age');
  });

  it('returns the childrens category with age 1.2', () => {
    expect(ageCategory(1.2)).toBe('childrens');
  });

  it('returns the juvenile category with age 16', () => {
    expect(ageCategory(16)).toBe('juvenile');
  });

  it('returns the adult category with age 90', () => {
    expect(ageCategory(90)).toBe('adult');
  });
});
