export const calculateAreaSquare = (l: number) => {
  const nonLNegative = Math.max(l * -1, l);

  return Math.pow(nonLNegative, 2);
};
