export const canFormTriangle = (n1: number, n2: number, n3: number) => {
  if (n1 + n2 > n3 && n2 + n3 > n1 && n1 + n3 > n2) {
    return true;
  }

  return false;
};
