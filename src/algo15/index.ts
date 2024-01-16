export const calculateTheAveregeConsumeFuel = (liter: number, bill: number) => {
  const nonNegativeLiter = Math.max(liter * -1, liter);
  const nonNegativeBill = Math.max(bill * -1, bill);

  const average = (nonNegativeLiter / nonNegativeBill).toFixed(2);

  return `The average consume is ${average}km/l`;
};
