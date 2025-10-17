function validatePassword(password) {
  const isLengthValid = password.length >= 8;

  const hasUppercase = password
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  const hasLowercase = password
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  const hasDigit = password
    .split("")
    .some((char) => !isNaN(parseInt(char, 10)));

  return isLengthValid && hasUppercase && hasLowercase && hasDigit;
}
