export const imcCheck = (height: number, weight: number) => {
  if (weight < 0 || height < 0) {
    return 'invalid data';
  }

  const imc = (weight * weight) / height;

  if (imc <= 18.5) {
    return 'underweight';
  }

  if (imc > 18.5 && imc <= 24.9) {
    return 'normal weight';
  }

  if (imc > 25 && imc <= 29.9) {
    return 'overweight';
  }

  if (imc > 30 && imc < 34.9) {
    return 'obesity I';
  }

  if (imc > 35 && imc <= 39.9) {
    return 'obesity II';
  }

  return 'obesity III';
};
