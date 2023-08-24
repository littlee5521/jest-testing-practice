const capitlizeString = require('../source/capitlizeString.js')
const reverseString = require('../source/reverseString.js')
const mathOperations = require('../source/mathOperations.js')

test('capitlizes first letter in string', () => {
  expect(capitlizeString('hello there')).toBe('Hello there')
})

test(' reverse a string', () => {
  expect(reverseString('hello there')).toBe('ereht olleh')
})

test('adds two numbers ', () => {
  expect(mathOperations.add(3, 9)).toBe(12)
})
