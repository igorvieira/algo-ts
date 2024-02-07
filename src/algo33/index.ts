export const averageCategory = (n1: number, n2: number, n3: number) => {
  if (n1 < 0 || n2 < 0 || n3 < 0) {
    return 'invalid input';
  }

  const avarage = n1 + n2 + n3 / 3;

  if (avarage >= 7) {
    return 'approved';
  } else {
    return 'failed';
  }
}; 
