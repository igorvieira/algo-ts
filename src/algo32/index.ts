export const ageCategory = (age: number) => {
  if (age < 0) {
    return 'invalid age';
  }

  if (age >= 0 && age < 10) {
    return 'childrens';
  } else if (age >= 11 && age < 17) {
    return 'juvenile';
  } else {
    return 'adult';
  }
};
