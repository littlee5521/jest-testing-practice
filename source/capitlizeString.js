function capitlizeString(input) {
  let firstLetter = input.charAt(0)
  firstLetter = firstLetter.toUpperCase()
  const remaingLetters = input.slice(1);
  return firstLetter + remaingLetters

}

module.exports = capitlizeString
