/** Solution #1: using indexOf => O(n^2) */
function areAllCharactersUnique(str) {
  let uniqueStr = "";

  for (let i = 0; i < str.length; i++) {
    uniqueStr += str[i];

    if (uniqueStr.indexOf(str[i]) !== i) return false;
  }

  return true;
}

/** Solution #2: using Set => O(n) */
function areAllCharactersUnique(str) {
  const charSet = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charSet.has(char)) return false;
    charSet.add(char);
  }

  return true;
}

/** Solution #3: using object => O(n) */
function areAllCharactersUnique(str) {
  const charObj = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charObj[char]) return false;
    charObj[char] = true;
  }

  return true;
}

module.exports = areAllCharactersUnique;
