export const calculateHypotenuse = (c1: number, c2: number) => {
  const nonC1Negative = Math.max(c1 * -1, c1);
  const nonC2Negative = Math.max(c2 * -1, c2);

  return {
    h: Number(
      Math.sqrt(
        Math.pow(nonC1Negative, 2) + Math.pow(nonC2Negative, 2)
      ).toFixed(2)
    ),
    c1: Math.pow(nonC1Negative, 2),
    c2: Math.pow(nonC2Negative, 2)
  };
};
