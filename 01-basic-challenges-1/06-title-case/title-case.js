function titleCase(str) {
  /** Solution #1: simple loop solution */
  // const words = str.split(" ");

  // // Loop through each word
  // for (let i = 0; i < words.length; i++) {
  //   const chars = words[i].split("");

  //   // Loop through each char of each word
  //   for (let j = 0; j < chars.length; j++) {
  //     if (j == 0) chars[j] = chars[j].toUpperCase();
  //     else chars[j] = chars[j].toLowerCase();
  //   }

  //   words[i] = chars.join("");
  // }

  // return words.join(" ");

  /** Solution #2: much faster, lower memory footprint, cleaner, and using JS standard practices */
  const words = str.toLowerCase().split(" ");

  for (i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

module.exports = titleCase;
