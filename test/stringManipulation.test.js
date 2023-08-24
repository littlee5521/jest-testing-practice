const capitlizeString = require('../source/capitlizeString.js')
const reverseString = require('../source/reverseString.js')

test('capitlizes first letter in string', () => {
  expect(capitlizeString('hello there')).toBe('Hello there')
})

test('should reverse a string', () => {
  expect(reverseString('hello there')).toBe('ereht olleh')
})
