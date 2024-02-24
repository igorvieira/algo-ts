export const polygonName = (sides: number) => {
  let name: string;

  if (sides < 3) {
    return 'invalid number';
  }

  switch (sides) {
    case 3:
      name = 'Triangle';
      break;
    case 4:
      name = 'Square';
      break;
    case 5:
      name = 'Pentagon';
      break;
    case 6:
      name = 'Hexagon';
      break;
    default:
      name = 'Polygon with more then 6 sides';
  }

  return name;
};
