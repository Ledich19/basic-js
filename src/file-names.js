const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let answer = [];
  for (const name of names) {
    if (!answer.includes(name)) {
      answer.push(name);
    } else {
      let num = 1;
      let res = name + `(${num})`;
      if (answer.includes(res)) {
        while (answer.includes(res)) {
          res = name + `(${num})`;
          num += 1;
        }
        answer.push(res);
        num = 1;
      } else {
        answer.push(res);
        num = 1;
      }
    }
  }
  return answer;
  // remove line with error and write your code here
}

module.exports = {
  renameFiles,
};
