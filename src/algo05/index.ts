//Calcule a área de um triângulo (A = (base * altura) / 2).

export const calculateTrianguleArea = (base: number, height: number) => {
  const nonBaseNegativeNumber = Math.max(base * -1, base);
  const nonHeightNegativeNumber = Math.max(height * -1, height);

  return (nonBaseNegativeNumber * nonHeightNegativeNumber) / 2;
};
