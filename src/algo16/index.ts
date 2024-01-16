export const calculateWeighedAverage = (
  num1: number,
  num2: number,
  num3: number
) => {
  const nonNegativeNum1 = Math.max(num1 * -1, num1);
  const nonNegativeNum2 = Math.max(num2 * -1, num2);
  const nonNegativeNum3 = Math.max(num3 * -1, num3);

  const weight1 = 2;
  const weight2 = 3;
  const weight3 = 5;

  return (
    (nonNegativeNum1 * weight1 +
      nonNegativeNum2 * weight2 +
      nonNegativeNum3 * weight3) /
    (weight1 + weight2 + weight3)
  ).toFixed(2);
};
