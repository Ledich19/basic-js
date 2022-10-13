const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let answer = '0';
  for (let i = 0; i < n.toString().length; i++) {
    let string = n.toString().split("");
    string.splice(i, 1)
    if (string > answer) {
      answer = string
    }
  }
return +answer.join("")
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit,
};
