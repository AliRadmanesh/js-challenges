/** Solution #1: sort and find [O(n log n)] */
// function findMissingNumber(arr) {
//   if (!arr) return undefined;
//   if (arr.length == 0) return 1;

//   const sortedArr = arr.sort((a, b) => a - b);

//   return sortedArr.findIndex((number, index) => number !== index + 1) + 1;
// }

/** Solution #2: using math! [O(n)] */
function findMissingNumber(arr) {
  if (!arr) return undefined;
  if (arr.length == 0) return 1;

  const n = arr.length + 1; // Expected length including missing number
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = arr.reduce(sum, (number) => sum + number, 0);

  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
