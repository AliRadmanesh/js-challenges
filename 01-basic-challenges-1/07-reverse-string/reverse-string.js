function reverseString(str) {
  /** Solution #1: for loop */
  // let reverseString = "";

  // for (i = str.length - 1; i >= 0; i--) {
  //   reverseString += str[i];
  // }

  // return reverseString;

  /** Solution #2: Using JS built-in methods */
  return str.split("").reverse().join("");
}

module.exports = reverseString;
