import { calculateProfessorHours } from '.';

describe('calculateProfessorHours', () => {
  it('calculate the professors hours with 100 reais per hour with 10 hours quantity', () => {
    expect(calculateProfessorHours(100, 10, 27.5)).toStrictEqual({
      amount: 725,
      paycheck: 1000,
      taxes: 275
    });
  });
  it('calculate the professors hours with -100 reais per hour with -10 hours quantity', () => {
    expect(calculateProfessorHours(-100, -10, -27.5)).toStrictEqual({
      amount: 725,
      paycheck: 1000,
      taxes: 275
    });
  });
});
