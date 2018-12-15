import { say } from '../src/utils';

describe('test util functions', () => {
  test('test say()', () => {
    expect(say()).toBe('hello world');
  });
});
