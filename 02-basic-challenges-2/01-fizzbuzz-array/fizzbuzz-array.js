function fizzBuzzArray(number) {
  const fizzBuzzArr = [];

  for (let i = 1; i <= number; i++) {
    let item = i;

    if (i % 3 === 0) {
      if (i % 5 === 0) item = "FizzBuzz";
      else item = "Fizz";
    } else if (i % 5 === 0) item = "Buzz";

    fizzBuzzArr.push(item);
  }

  return fizzBuzzArr;
}

module.exports = fizzBuzzArray;
