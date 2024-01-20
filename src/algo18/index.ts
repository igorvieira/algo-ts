export const calculateBill = (bill: number) => {
  const nonNegetiveBill = Math.max(bill * -1, bill);

  return {
    bill: nonNegetiveBill,
    tip: nonNegetiveBill + nonNegetiveBill * 0.1
  };
};
