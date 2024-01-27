import { expect, test } from '@jest/globals'
import palindrome from '.'

test('Function should be defined', () => {
  expect(palindrome).toBeDefined
})

test('Function should return true if Palindrome', () => {
  expect(palindrome('apple')).toBeFalsy()
})

test('function should return false if not Palindrome text', () => {
  expect(palindrome('abba')).toBeTruthy()
})

test('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});