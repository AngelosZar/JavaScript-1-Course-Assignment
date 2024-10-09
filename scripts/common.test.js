import { formatCurrency } from './common.mjs';
const TEST_VALUE = 2;
const TEST_VALUE2 = 'w';
test('input should be a number', () => {
  expect(formatCurrency(TEST_VALUE)).toBe('2.00');
  expect(() => formatCurrency(TEST_VALUE2)).toThrow('Amount must be a number');
});
