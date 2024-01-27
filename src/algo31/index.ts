export const increasePaycheck = (amount: number) => {
  if (amount < 0) {
    return 'invalid amount';
  }

  if (amount > 2000) {
    return {
      paycheck: amount,
      newPaycheck: amount + amount * 0.1
    };
  }

  return {
    paycheck: amount,
    newPaycheck: amount + amount * 0.2
  };
};
