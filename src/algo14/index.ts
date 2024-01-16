// Para homens: peso ideal = (72.7 * altura) - 58.
// Para mulheres: peso ideal = (62.1 * altura) - 44.7.

export const calculateIdealWeight = (height: number) => {
  const nonNegativeHeight = Math.max(height * -1, height);

  const men = (72.7 * nonNegativeHeight - 58).toFixed(2);
  const women = (62.1 * nonNegativeHeight - 44.7).toFixed(2);

  return {
    height,
    men: parseFloat(men),
    women: parseFloat(women)
  };
};
