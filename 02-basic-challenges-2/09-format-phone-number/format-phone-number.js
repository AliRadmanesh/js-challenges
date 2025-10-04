function formatPhoneNumber(numArr) {
  const numStr = numArr.join("");
  const first = numStr.substring(0, 3);
  const second = numStr.substring(3, 6);
  const third = numStr.substring(6);

  return `(${first}) ${second}-${third}`;
}

module.exports = formatPhoneNumber;
