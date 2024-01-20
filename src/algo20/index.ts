export const calculateTheHarmonicaAverage = (
  num1: number,
  num2: number,
  num3: number
) => {
  const nonNumber1Negative = Math.max(num1 * -1, num1);
  const nonNumber2Negative = Math.max(num2 * -1, num2);
  const nonNumber3Negative = Math.max(num3 * -1, num3);

  return Number(
    (
      3 /
      (1 / nonNumber1Negative + 1 / nonNumber2Negative + 1 / nonNumber3Negative)
    ).toFixed(2)
  );
};
