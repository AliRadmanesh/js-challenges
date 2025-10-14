function generateHashtag(str) {
  if (!str || !str.trim() || str.length > 140) return false;

  const hashtag = str
    .trim()
    .split(" ")
    .filter(Boolean)
    .reduce(
      (acc, word) => acc + word.charAt(0).toUpperCase() + word.substring(1),
      "#"
    );

  return hashtag;
}

module.exports = generateHashtag;
