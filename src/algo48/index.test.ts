import { numberGuessingGame } from '.';

describe('numberGuessingGame', () => {
  it('returns the correct guess', () => {
    const game = numberGuessingGame(1, 10);

    expect(game.guess(game.secretNumber)).toBe('Congratulations!!');
  });

  it('returns the out of range message', () => {
    const game = numberGuessingGame(1, 10);

    expect(game.guess(15)).toBe('Out of range!');
    expect(game.guess(-1)).toBe('Out of range!');
  });
});
