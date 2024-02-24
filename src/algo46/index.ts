export const createAListOfSomeMultiplicationTable = (num: number) => {
  let table: string[] = [];

  if (num < 0) {
    throw new Error('Invalid negative number');
  }

  for (let i = 1; i <= 10; i++) {
    table.push(`${i} * ${num} = ${num * i}`);
  }

  return table;
};
