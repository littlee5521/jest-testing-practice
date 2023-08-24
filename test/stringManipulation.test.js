const capitlizeString = require('../source/capitlizeString.js')

test('capitlizes first letter in string', () => {
  expect(capitlizeString('hello there')).toBe('Hello there')
})
