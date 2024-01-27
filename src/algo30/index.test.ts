import { callGreetings } from '.';

describe('callGreetings', () => {
  it('returns Good Morning message', () => {
    expect(callGreetings(8)).toBe('Good morning');
    expect(callGreetings(8)).not.toBe('Good afternoon');
    expect(callGreetings(8)).not.toBe('Good night');
  });

  it('returns Good Afternoon message', () => {
    expect(callGreetings(12)).not.toBe('Good morning');
    expect(callGreetings(12)).toBe('Good afternoon');
    expect(callGreetings(12)).not.toBe('Good night');
  });

  it('returns Good Night message', () => {
    expect(callGreetings(19)).not.toBe('Good morning');
    expect(callGreetings(19)).not.toBe('Good afternoon');
    expect(callGreetings(19)).toBe('Good night');
  });
});
