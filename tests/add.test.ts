import { add } from '../src/utils';

test('adds two numbers correctly', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
});