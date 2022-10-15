const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const answer = [];
  for (let i = 0; i < matrix.length; i++) {
    answer.push([])
    for (let j = 0; j < matrix[i].length; j++) {
      const top = i === 0 ? 0 : matrix[i - 1][j] ? 1 : 0;
      const topRight = (i === 0 || j === (matrix[i].length - 1)) ? 0 : matrix[i - 1][j + 1] ? 1 : 0;
      const topRLeft = (i === 0 || j === 0) ? 0 : matrix[i - 1][j - 1] ? 1 : 0;
      const bottom = (i === matrix.length - 1) ? 0 : matrix[i + 1][j] ? 1 : 0;
      const bottomRight = ((i === matrix.length - 1) || j === matrix[i].length - 1) ? 0 : matrix[i + 1][j + 1] ? 1 : 0;
      const bottomLeft = ((i === matrix.length - 1) || 0) ? 0 : matrix[i + 1][j - 1] ? 1 : 0;
      const right = (j === matrix[i].length - 1) ? 0 : matrix[i][j + 1] ? 1 : 0;
      const left = j === 0 ? 0 : matrix[i][j - 1] ? 1 : 0;
      answer[i][j] = top + bottom + left + right + topRight + topRLeft + bottomLeft + bottomRight;
    }
  }
return answer
  // remove line with error and write your code here
}

module.exports = {
  minesweeper,
};
