export const swapContext = (number1: number, number2: number) => {
  var a = number1;
  var b = number2;
  var swap = 0;

  swap = a;
  a = b;
  b = swap;

  return {
    a,
    b
  };
};
