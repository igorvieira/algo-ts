import { displayAscendingOrder } from './indext';

describe('displayAscendingOrder', () => {
  it('returns with the correct order this numbers 13, 1 and 6', () => {
    expect(displayAscendingOrder(13, 1, 6)).toBe('1, 6 and 13');
  });

  it('returns with the correct order this numbers 13, 1 and -6', () => {
    expect(displayAscendingOrder(13, 1, -6)).toBe('-6, 1 and 13');
  });

  it('returns with the correct order this numbers 13, 1 and -6.2', () => {
    expect(displayAscendingOrder(13, 1, -6.2)).toBe('-6.2, 1 and 13');
  });
});
