const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let sing = str[0];
  let result = "";

  for (let i = 1; i <= str.length; i++) {
    if (sing === str[i]) {
      count++;
    } else {
      result += (count === 1 ? "" : count) + sing;
      sing = str[i];
      count = 1;
    }
  }
  return result;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine,
};
