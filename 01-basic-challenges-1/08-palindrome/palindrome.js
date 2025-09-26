function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Only accept alphanumeric chars

  /** Two options: 1. loop through each char  2. using JS reverse() function */
  /** Option #1 */
  // // for (let i = 0; i < formattedStr.length / 2; i++) {
  // //   if (formattedStr[i] === formattedStr[formattedStr.length - i - 1])
  // //     continue;
  // //   else return false;
  // // }

  // return true;

  /** Option #2 */
  const reversedStr = formattedStr.split("").reverse().join("");
  return reversedStr === formattedStr;
}

module.exports = isPalindrome;
