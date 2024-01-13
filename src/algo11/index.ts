export const calculateIncreasePaycheck = (increase: number, amount: number) => {
  const nonNegativeIncrease = Math.max(increase * -1, increase);
  const nonNegativeAmount = Math.max(amount * -1, amount);

  const percent = nonNegativeIncrease / 100;
  const calculatePercentAmount = nonNegativeAmount * percent;

  return {
    paycheck: nonNegativeAmount,
    newPaycheck: nonNegativeAmount + calculatePercentAmount
  };
};
