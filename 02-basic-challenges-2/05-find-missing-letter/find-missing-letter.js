/** Solution #1: using indexOf and alphabet list */
function findMissingLetter(chars) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startChar = alphabet.indexOf(chars[0]);

  for (let i = 1; i <= chars.length; i++) {
    if (chars[i] !== alphabet[startChar + i]) {
      return alphabet[startChar + i];
    }
  }

  return "";
}

/** Solution #2: using charCodeAt & fromCharCode */
function findMissingLetter(chars) {
  let startCharCode = chars[0].charCodeAt(0);

  for (let i = 1; i <= chars.length; i++) {
    const currentCharCode = chars[i].charCodeAt(0);

    if (currentCharCode - startCharCode > 1) {
      return String.fromCharCode(startCharCode + 1);
    }

    startCharCode = currentCharCode;
  }
}

module.exports = findMissingLetter;
