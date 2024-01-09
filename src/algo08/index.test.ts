import { calculateSphereVolume } from './';

describe('caculateSphereVolume', () => {
  it('caculate the sphare volume of 2.5', () => {
    expect(calculateSphereVolume(2.5)).toBe(65.42);
  });

  it('caculate the sphare volume of -2.5', () => {
    expect(calculateSphereVolume(-2.5)).not.toBe(-65.42);
    expect(calculateSphereVolume(-2.5)).toBe(65.42);
  });
});
