const { validAnagramsOptimal } = require("./valid-anagrams");

test("Checking for Valid Anagrams", () => {
  expect(validAnagramsOptimal("listen", "silent")).toBe(true);
  expect(validAnagramsOptimal("hello", "world")).toBe(false);
  expect(validAnagramsOptimal("astronomer", "moonstarer")).toBe(true);
  expect(validAnagramsOptimal("apple", "banana")).toBe(false);
  expect(validAnagramsOptimal("aaa", "aaab")).toBe(false);
});
