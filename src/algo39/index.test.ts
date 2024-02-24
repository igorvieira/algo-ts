import { polygonName } from '.';

describe('polygonNames', () => {
  it('returns message if we have lass then 3 sides', () => {
    expect(polygonName(2)).toBe('invalid number');
    expect(polygonName(-2)).toBe('invalid number');
  });

  it('returns triangle for 3 sides', () => {
    expect(polygonName(3)).toBe('Triangle');
  });

  it('returns square for 4 sides', () => {
    expect(polygonName(4)).toBe('Square');
  });

  it('returns square for 5 sides', () => {
    expect(polygonName(5)).toBe('Pentagon');
  });

  it('returns square for 6 sides', () => {
    expect(polygonName(6)).toBe('Hexagon');
  });

  it('returns some message with more then 6 sides', () => {
    expect(polygonName(7)).toBe('Polygon with more then 6 sides');
  });
});
