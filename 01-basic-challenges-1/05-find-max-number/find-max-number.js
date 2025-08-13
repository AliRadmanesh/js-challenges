function findMaxNumber(arr) {
  /** Solution #1 */
  // let maxNumber = arr[0];

  // for (let index = 0; index < arr.length - 1; index++) {
  //   if (arr[index + 1] > arr[index]) maxNumber = arr[index + 1];
  // }

  // return maxNumber;

  /** Solution #2 */
  // const maxNumber = arr.sort((a, b) => b - a)[0];
  // return maxNumber;

  /** Solution #3 */
  const maxNumber = Math.max(...arr);
  return maxNumber;
}

module.exports = findMaxNumber;
