import { imcCheck } from '.';

describe('Testing the imcCheck function', () => {
  it('returns "invalid data" if either height or weight is negative', () => {
    expect(imcCheck(-1, 70)).toBe('invalid data');
    expect(imcCheck(170, -70)).toBe('invalid data');
    expect(imcCheck(-170, -70)).toBe('invalid data');
  });

  it('identifies "underweight" when IMC is less than or equal to 18.5', () => {
    expect(imcCheck(170, 50)).toBe('underweight');
    expect(imcCheck(160, 45)).toBe('underweight');
  });

  it('detects "normal weight" when IMC is greater than 18.5 and less than or equal to 24.9', () => {
    expect(imcCheck(170, 60)).toBe('normal weight');
    expect(imcCheck(180, 65)).toBe('normal weight');
  });

  it('labels "overweight" when IMC is greater than 25 and less than or equal to 29.9', () => {
    expect(imcCheck(170, 70)).toBe('overweight');
    expect(imcCheck(160, 65)).toBe('overweight');
  });

  it('marks "obesity I" when IMC is greater than 30 and less than 34.9', () => {
    expect(imcCheck(190, 80)).toBe('obesity I');
    expect(imcCheck(160, 74)).toBe('obesity I');
  });

  it('marks "obesity II" when IMC is greater than 35 and less than or equal to 39.9', () => {
    expect(imcCheck(170, 80)).toBe('obesity II');
    expect(imcCheck(160, 75)).toBe('obesity II');
  });

  it('recognizes "obesity III" when IMC is greater than 40', () => {
    expect(imcCheck(170, 110)).toBe('obesity III');
    expect(imcCheck(160, 100)).toBe('obesity III');
  });
});
