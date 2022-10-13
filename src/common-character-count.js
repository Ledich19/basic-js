const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const answer = [];
  let string1 = s1.split('');
  let string2 = s2.split('');
  for (const letter of string1) {
    if (string2.includes(letter)) {
      string2.splice(string2.indexOf(letter), 1);
      answer.push(letter);
    }
  }
  return answer.length;
  // remove line with error and write your code here
}
console.log(getCommonCharacterCount("aabcc", "adcaa"));
module.exports = {
  getCommonCharacterCount,
};
