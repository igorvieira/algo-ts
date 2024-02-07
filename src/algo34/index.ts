export const multiplesByFiveAndThree = (num: number) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return true;
  }

  return false;
};
