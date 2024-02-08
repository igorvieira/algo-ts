export const defineAge = (age: number) => {
  if (age < 0) {
    return 'invalid age';
  }

  if (age >= 0 && age <= 12) {
    return 'child';
  }

  if (age >= 13 && age <= 17) {
    return 'adolescent';
  }

  if (age >= 18 && age <= 29) {
    return 'young_adult';
  }

  if (age >= 30 && age <= 64) {
    return 'adult';
  }

  return 'elderly';
};
