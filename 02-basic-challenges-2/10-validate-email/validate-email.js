function validateEmail(str) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return pattern.test(str);
}

module.exports = validateEmail;
