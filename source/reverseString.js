function reverseString(input) {
  let stringReversed = ''

  for (let i = 0; i < input.length + 1; i++) {
    stringReversed = stringReversed + input.charAt(input.length - i)
  }
  return stringReversed
}

module.exports = reverseString
