export const checkTheCurrentNumber = (n: number) => {
  if (n < 0) {
    return 'negative';
  }

  if (n > 0) {
    return 'positive';
  }

  return 'zero';
};
