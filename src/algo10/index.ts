export const calculateDollarToReal = (
  currentDollar: number,
  amount: number
) => {
  const nonNegativeDollar = Math.max(currentDollar * -1, currentDollar);
  const nonNegativeAmount = Math.max(amount * -1, amount);
  return nonNegativeDollar * nonNegativeAmount;
};
