export const numberGuessingGame = (minNumber: number, maxNumber: number) => {
  const secretNumber =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  function guess(num: number) {
    if (num < minNumber || num > maxNumber) {
      return 'Out of range!';
    } else if (num === secretNumber) {
      return 'Congratulations!!';
    } else if (num < secretNumber) {
      return 'Too low';
    } else {
      return 'Too High';
    }
  }

  return { guess, secretNumber };
};
