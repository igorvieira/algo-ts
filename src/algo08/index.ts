// (V = (4/3) * π * raio^3)

export const calculateSphereVolume = (radius: number) => {
  const nonVolumeRadius = Math.max(radius * -1, radius);

  const volume = (4 / 3) * 3.14 * Math.pow(nonVolumeRadius, 3);

  return Number(volume.toFixed(2));
};
