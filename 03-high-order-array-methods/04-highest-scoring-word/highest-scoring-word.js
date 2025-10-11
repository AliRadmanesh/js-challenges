// function highestScoringWord(sentence) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const words = sentence.split(" ");
//   const scores = {};

//   words.forEach((word, index) => {
//     scores[index] = word
//       .split("")
//       .reduce((sum, char) => sum + alphabet.indexOf(char), 0);
//   });

//   const sortedScores = Object.values(scores).sort((a, b) => b - a);
//   const highestScore = sortedScores[0];
//   const wordIndex = Object.keys(scores).find(
//     (key) => scores[key] === highestScore
//   );
//   return words[wordIndex];
// }

/** Solution #2: more efficient */
function highestScoringWord(str) {
  const words = str.split(" ");

  const scores = words.map((word) => {
    let score = 0;
    for (const letter of word) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });

  let highestScore = 0;
  let highestIndex = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestIndex = i;
    }
  }

  return words[highestIndex];
}

module.exports = highestScoringWord;
