export const calculateRectanglePerimeter = (base: number, height: number) => {
  const nonNegativeBase = Math.max(base * -1, base);
  const nonNegativeHeight = Math.max(height * -1, height);

  return 2 * (nonNegativeBase + nonNegativeHeight);
};
