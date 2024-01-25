export const checkClassNote = (note: number) => {
  if (note < 0) {
    return 'not allowed';
  }

  if (note >= 7 || note < 0) {
    return 'approved';
  }

  return 'disapproved';
};
