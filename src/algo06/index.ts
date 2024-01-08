export const convertMetersToCetimeters = (value: number) => {
  const nonNegativeValue = Math.max(value * -1, value);
  return nonNegativeValue * 100;
};
