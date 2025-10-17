function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);

  const missingCharCode = arr
    .slice(1)
    .map((char) => char.charCodeAt(0))
    .find((current) => {
      if (current - start > 1) {
        return true;
      }

      start = current;
      return false;
    });

  return missingCharCode ? String.fromCharCode(missingCharCode - 1) : "";
}

module.exports = findMissingLetter;
