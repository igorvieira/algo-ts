export const displayAscendingOrder = (n1: number, n2: number, n3: number) => {
  let smallest: number;
  let middle: number;
  let largest: number;

  if (n1 < n2 && n1 < n3) {
    smallest = n1;

    if (n2 < n3) {
      middle = n2;
      largest = n3;
    } else {
      middle = n3;
      largest = n2;
    }
  } else if (n2 < n1 && n2 < n3) {
    smallest = n2;

    if (n1 < n3) {
      middle = n1;
      largest = n3;
    } else {
      middle = n3;
      largest = n1;
    }
  } else {
    smallest = n3;

    if (n1 < n2) {
      middle = n1;
      largest = n2;
    } else {
      middle = n2;
      largest = n1;
    }
  }

  return `${smallest}, ${middle} and ${largest}`;
};
