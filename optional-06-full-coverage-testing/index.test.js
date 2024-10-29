import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Test case 1: sum(2, 3) => 5
test('sum(2, 3) should return 5', () => {
  assert.strictEqual(sum(2, 3), 5);
});

// Test case 2: sum(-1, 5) => 0 (karena angka negatif)
test('sum(-1, 5) should return 0 because of negative input', () => {
  assert.strictEqual(sum(-1, 5), 0);
});

// Test case 3: sum(2, "5") => 0 (karena input bukan number)
test('sum(2, "5") should return 0 because one input is not a number', () => {
  assert.strictEqual(sum(2, '5'), 0);
});

// Test case 4: sum("a", 5) => 0 (karena input bukan number)
test('sum("a", 5) should return 0 because input "a" is not a number', () => {
  assert.strictEqual(sum('a', 5), 0);
});

// Test case 5: sum(10, 20) => 30
test('sum(10, 20) should return 30', () => {
  assert.strictEqual(sum(10, 20), 30);
});

// Test case 6: sum(0, 0) => 0
test('sum(0, 0) should return 0', () => {
  assert.strictEqual(sum(0, 0), 0);
});

// Test case 7: sum(-5, -5) => 0 (karena angka negatif)
test('sum(-5, -5) should return 0 because both inputs are negative', () => {
  assert.strictEqual(sum(-5, -5), 0);
});