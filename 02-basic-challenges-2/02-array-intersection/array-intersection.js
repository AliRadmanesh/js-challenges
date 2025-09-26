function arrayIntersection(arr1, arr2) {
  /** Solution #1: loop */
  // let intersectionArr = [];

  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2.length; j++) {
  //     if (arr1[i] === arr2[j]) {
  //       intersectionArr.push(arr1[i]);
  //       break;
  //     }
  //   }
  // }

  // return intersectionArr;

  /** Solution #2: Built-in Filter function */
  // let intersectionArr = [];

  // for (let i = 0; i < arr1.length; i++) {
  //   intersectionArr.push(...arr2.filter((item) => item === arr1[i]));
  // }

  // return intersectionArr;

  /** Option #3: Using Built-in Set */
  const set1 = new Set(arr1);
  const intersectionArr = [];
  const seen = new Set();

  for (const item of arr2) {
    if (set1.has(item) && !seen.has(item)) {
      intersectionArr.push(item);
      seen.add(item);
    }
  }

  return intersectionArr;
}

module.exports = arrayIntersection;
