export const factorial = (num: number) => {
  if (num < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};
