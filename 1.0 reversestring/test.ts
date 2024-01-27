import { describe, expect, test } from '@jest/globals';
import reverseString from './index'

test('Reverse function exists', () => {
  expect(reverseString).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverseString('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverseString('  abcd')).toEqual('dcba  ');
});
