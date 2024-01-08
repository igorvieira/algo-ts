import { convertMetersToCetimeters } from '.';

describe('convertMetersToCentimeters', () => {
  it('calculate 3 meters to centimeters', () => {
    const EXPECTED_VALUE = 300;
    expect(convertMetersToCetimeters(3)).toBe(EXPECTED_VALUE);
  });

  it('calculate with negative number', () => {
    const EXPECTED_VALUE = 300;
    expect(convertMetersToCetimeters(-3)).not.toBe(-EXPECTED_VALUE);
    expect(convertMetersToCetimeters(-3)).toBe(EXPECTED_VALUE);
  });
});
