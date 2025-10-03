/** Solution #1: using Map */
function findFirstNonRepeatingCharacter(str) {
  const charMap = new Map();

  for (const char of str) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  for (const char of str) {
    if (charMap.get(char) === 1) return char;
  }

  return null;
}

/** Solution #2: using object */
function findFirstNonRepeatingCharacter(str) {
  const charObj = {};

  for (const char of str) {
    charObj[char] = (charObj[char] || 0) + 1;
  }

  for (const char of str) {
    if (charObj[char] == 1) return char;
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
