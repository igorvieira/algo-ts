export const isAMinor = (age: string) => {
  const ageParsed = parseInt(age);

  if (ageParsed < 0) {
    return 'age not valid';
  }

  if (ageParsed >= 18) {
    return 'adult';
  }

  return 'minor';
};
