import { say } from '../src/utils';

describe('test functions', () => {
  test('test say()', () => {
    expect(say()).toBe('hello world');
  });
});
