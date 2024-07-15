import { primeFactors } from '.';

describe('primeFactors', () => {
  it('correctly decomposes 2 into prime factors', () => {
    expect(primeFactors(2)).toStrictEqual([2]);
  });

  it('correctly decomposes 10 into prime factors', () => {
    expect(primeFactors(10)).toStrictEqual([2, 5]);
  });

  it('correctly decomposes 5 into prime factors', () => {
    expect(primeFactors(5)).toStrictEqual([5]);
  });

  it('correctly decomposes 37 into prime factors', () => {
    expect(primeFactors(37)).toStrictEqual([37]);
  });
});
