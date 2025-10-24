function sumUpTo(n) {
  if (n <= 1) {
    console.log(`sumUpTo(${n}) returns 1`);
    return n;
  }

  console.log(`sumUpTo(${n}) calls sumUpTo(${n - 1}) + ${n}`);
  const result = sumUpTo(n - 1) + n;
  console.log(`sumUpTo(${n}) returns ${result}`);
  return result;
}

module.exports = sumUpTo;
