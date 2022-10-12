const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i = i + 2;
        break;
      case "--discard-prev":
        answer.pop();
        break;
      case "--double-next":
        if (arr[i + 1]) {
          answer.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (answer[answer.length - 1]) {
          answer.push(arr[i - 1]);
        }
        break;
      default:
        answer.push(arr[i]);
        break;
    }
  }
  return answer;
  // remove line with error and write your code here
}

module.exports = {
  transform,
};
