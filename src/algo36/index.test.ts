import { defineAge } from '.';

describe('defineAge', () => {
  it('returns "invalid age" for negative age', () => {
    const age = -5;
    const result = defineAge(age);
    expect(result).toEqual('invalid age');
  });

  it('returns "child" for ages between 0 and 11 (inclusive)', () => {
    const age = 8;
    const result = defineAge(age);
    expect(result).toEqual('child');
  });

  it('returns "adolescent" for ages between 13 and 16 (inclusive)', () => {
    const age = 15;
    const result = defineAge(age);
    expect(result).toEqual('adolescent');
  });

  it('returns "young_adult" for ages between 18 and 28 (inclusive)', () => {
    const age = 25;
    const result = defineAge(age);
    expect(result).toEqual('young_adult');
  });

  it('returns "adult" for ages between 30 and 63 (inclusive)', () => {
    const age = 40;
    const result = defineAge(age);
    expect(result).toEqual('adult');
  });

  it('returns "elderly" for ages 64 and above', () => {
    const age = 70;
    const result = defineAge(age);
    expect(result).toEqual('elderly');
  });
});
