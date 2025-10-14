function validAnagrams(str1, str2) {
  const freqCount1 = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const freqCount2 = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return (
    Object.keys(freqCount1).every(
      (char) => freqCount1[char] === freqCount2[char]
    ) &&
    Object.keys(freqCount2).every(
      (char) => freqCount1[char] === freqCount2[char]
    )
  );
}

// OPTIMAL SOLUTION - More efficient approach
function validAnagramsOptimal(str1, str2) {
  // Early return if lengths are different
  if (str1.length !== str2.length) {
    return false;
  }

  // Use a single frequency counter
  const freqCount = {};

  // Count characters in first string (increment)
  for (const char of str1) {
    freqCount[char] = (freqCount[char] || 0) + 1;
  }

  // Count characters in second string (decrement)
  for (const char of str2) {
    if (!freqCount[char]) {
      return false; // Character doesn't exist in first string
    }
    freqCount[char]--;
  }

  // Check if all frequencies are zero
  return Object.values(freqCount).every((count) => count === 0);
}

module.exports = { validAnagrams, validAnagramsOptimal };
