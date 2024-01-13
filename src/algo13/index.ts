export const beforeAfterNumber = (num: number) => {
  const before = num - 1;
  const after = num + 1;

  return {
    num,
    before,
    after
  };
};
