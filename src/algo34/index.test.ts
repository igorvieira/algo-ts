import { multiplesByFiveAndThree } from '.';

describe('multipleByThreeAndFive', () => {
  it('returns true using the number 15', () => {
    expect(multiplesByFiveAndThree(15)).toBeTruthy();
    expect(multiplesByFiveAndThree(-15)).toBeTruthy();
  });

  it('returns false using the number 5', () => {
    expect(multiplesByFiveAndThree(5)).toBeFalsy();
  });

  it('returns false using the nubmer 3', () => {
    expect(multiplesByFiveAndThree(3)).toBeFalsy();
  });
});
