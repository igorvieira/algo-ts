export const productDiscount = (discount: number, productAmount: number) => {
  const nonNegativeDiscount = Math.max(discount * -1, discount);
  const nonNegativeProductAmount = Math.max(productAmount * -1, productAmount);

  const percent = nonNegativeDiscount/100;
  const calculatePercentAmount = nonNegativeProductAmount * percent;

  return {
    productAmount,
    newProductAmount: nonNegativeProductAmount - calculatePercentAmount,
    discount
  }

}
