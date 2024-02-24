export const sumNumbers = (numberList: number[]) => {
  let sum = 0;
  let i = 0;

  while (i < numberList.length && numberList[i] >= 0) {
    sum += numberList[i];
    i++;
  }

  return sum;
};
