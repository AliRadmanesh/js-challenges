function sumOfEvenSquares(arr) {
  const evenNumbers = arr.filter((num) => num % 2 == 0);
  const squareEvenNumbers = evenNumbers.map((num) => num * num);
  const sumOfSquareEvenNumbers = squareEvenNumbers.reduce(
    (sum, num) => sum + num,
    0
  );

  return sumOfSquareEvenNumbers;
}

module.exports = sumOfEvenSquares;
