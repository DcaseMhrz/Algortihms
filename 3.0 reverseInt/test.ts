import { test, expect } from '@jest/globals'
import reverseInt from '.'

test("Function to be defined", () => {
  expect(reverseInt).toBeDefined()
})

test('Reverse int should handle 0 as 0', () => {
  expect(reverseInt(0)).toEqual(0)
})

test('reverseInt should handle positive numbers', () => {
  expect(reverseInt(5)).toEqual(5);
  expect(reverseInt(15)).toEqual(51);
  expect(reverseInt(90)).toEqual(9);
  expect(reverseInt(2359)).toEqual(9532);
})

test('reverseInt should handle negative numbers', () => {
  expect(reverseInt(-5)).toEqual(-5);
  expect(reverseInt(-15)).toEqual(-51);
  expect(reverseInt(-90)).toEqual(-9);
  expect(reverseInt(-2359)).toEqual(-9532);
})
