import { convertToFahrenheit } from '.';

describe('convertToFahrenheit', () => {
  it('returns 36 graus celsius to 96.8 graus fahrenheit', () => {
    expect(convertToFahrenheit(36)).toBe(96.8);
    expect(convertToFahrenheit(36)).not.toBe(97);
  });

  it('convert 0 graus celsius to 32 graus fahrenheit', () => {
    expect(convertToFahrenheit(0)).toBe(32);
    expect(convertToFahrenheit(0)).not.toBe(0);
  });

  it('converts negative Celsius temperature correctly', () => {
    expect(convertToFahrenheit(-10)).toBe(14);
    expect(convertToFahrenheit(-10)).not.toBe(-10);
  });

  it('handles decimal values', () => {
    expect(convertToFahrenheit(15.5)).toEqual(59.9);
  });
});
