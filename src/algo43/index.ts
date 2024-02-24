export const addNumbersFromTwoToTwenty = () => {
  let numberList: number[] = [];

  for (let i = 2; i <= 20; i += 2) {
    numberList.push(i);
  }

  return numberList;
};
