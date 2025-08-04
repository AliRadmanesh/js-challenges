function countOccurrences(str, char) {
  /** Solution #1 */
  // let occurrences = 0;
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === char) occurrences += 1;
  // }
  // return occurrences;

  /** Solution #2 */
  // const occurrences = str
  //   .split("")
  //   .reduce((acc, current) => (current === char ? acc + 1 : acc), 0);
  // return occurrences;

  /** Solution #3 */
  // const charsOccurrence = str.split("").filter((c) => c === char);
  // return charsOccurrence.length;

  /** Solution #4 */
  return str.split(char).length - 1;
}

module.exports = countOccurrences;
