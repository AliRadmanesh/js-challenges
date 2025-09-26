function removeDuplicates(arr) {
  /** Solution #1: loop */
  // const uniqueItemsArr = [];

  // arr.forEach((item) => {
  //   if (!uniqueItemsArr.includes(item)) uniqueItemsArr.push(item);
  // });

  // return uniqueItemsArr;

  /** Solution #2: Using built-in Set in JS  */
  const uniqueItemsArr = new Set(arr);
  return [...uniqueItemsArr];
}

module.exports = removeDuplicates;
