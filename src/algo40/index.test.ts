import { isPrime } from '.';

describe('isPrime', () => {
  it('invalid number', () => {
    expect(isPrime(0)).toBeFalsy();
    expect(isPrime(-1231)).toBeFalsy();
  });

  it('5 is a prime number', () => {
    expect(isPrime(5)).toBeTruthy();
  });

  it('4 is not a prime number', () => {
    expect(isPrime(4)).toBeFalsy();
  });

  it('10 is not a prime number', () => {
    expect(isPrime(10)).toBeFalsy();
  });

  it('17 is a prime number', () => {
    expect(isPrime(17)).toBeTruthy();
  });
});
