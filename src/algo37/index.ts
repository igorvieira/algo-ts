export const triangleType = (a: number, b: number, c: number) => {
  if (a < 0 || b < 0 || c < 0) {
    return 'invalid data';
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    return 'not a triangle';
  }

  if (a === b && b === c) {
    return 'equilateral';
  }

  if (a === b || b === c || c === a) {
    return 'isosceles';
  }

  return 'scalene';
};
