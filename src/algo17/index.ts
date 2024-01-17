export const calculateProfessorHours = (
  hour: number,
  quantityHours: number,
  discount: number
) => {
  const nonNegativeHour = Math.max(hour * -1, hour);
  const nonNegativeQuantity = Math.max(quantityHours * -1, quantityHours);
  const nonNegativeDiscount = Math.max(discount * -1, discount);

  const paycheck = nonNegativeHour * nonNegativeQuantity;

  const taxes = paycheck * (nonNegativeDiscount / 100);

  return {
    paycheck,
    taxes,
    amount: paycheck - taxes
  };
};
