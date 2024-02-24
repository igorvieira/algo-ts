export const addNumbersFromOneToTheLimit = (limit: number) => {
  let numberList = [];

  if (limit < 1) {
    return 'invalid number';
  }

  for (let i = 1; i <= limit; i++) {
    numberList.push(i);
  }

  return numberList;
};
