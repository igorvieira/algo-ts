export const isHigher = (n1: number, n2: number) => {
  if (n1 === n2) {
    return 'equals';
  }

  if (n1 > n2) {
    return `${n1} is higher then ${n2}`;
  }

  return `${n2} is higher then ${n1}`;
};
