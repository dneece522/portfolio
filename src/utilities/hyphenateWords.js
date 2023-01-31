function hyphenateWords(str) {
  let newStr = str.replaceAll(' ', '-').toLowerCase()
  return newStr
}

export {
  hyphenateWords
}