const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubledNumbers = numbers.map((number) => number * 2);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const belowFourNumbers = numbers.filter((number) => number < 4);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const sum = numbers.reduce((sum, number) => sum + number, 0);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
const evenNumbers = [];
numbers.forEach((number) => {
  if (number % 2 == 0) evenNumbers.push(number);
});

/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const divisibleByThree = numbers.find((number) => number % 3 == 0);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const greaterThanFour = numbers.some((number) => number > 4);

/**
 * every: Checks if all array elements satisfy a condition.
 */
const belowFive = numbers.every((number) => number < 5);
