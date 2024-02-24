export const isPerfectNumber = (num: number) => {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      console.log(i);
      sum += i;
    }
  }

  return num === sum;
};
