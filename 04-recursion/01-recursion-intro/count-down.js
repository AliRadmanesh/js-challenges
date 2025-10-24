function countDown(n) {
  if (n <= 0) {
    console.log("All done!");
    return;
  }

  console.log(n);
  n--;
  countDown(n);
}

module.exports = countDown;
