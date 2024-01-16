import { calculateTheAveregeConsumeFuel } from '.';

describe('calculateTheAveregeConsumeFuel', () => {
  it('calculate the average consume of this car', () => {
    expect(calculateTheAveregeConsumeFuel(400, 270)).toBe(
      'The average consume is 1.48km/l'
    );
  });

  it('calculate the average consume of this car using negative values', () => {
    expect(calculateTheAveregeConsumeFuel(-400, -270)).toBe(
      'The average consume is 1.48km/l'
    );
  });

  it('calculate the average consume of this car using float point values', () => {
    expect(calculateTheAveregeConsumeFuel(450.05, 230.5)).not.toBe(
      'The average consume is 1.48km/l'
    );

    expect(calculateTheAveregeConsumeFuel(450.05, 230.5)).toBe(
      'The average consume is 1.95km/l'
    );
  });
});
