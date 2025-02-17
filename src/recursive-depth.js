const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let calk = 0;
    if (!Array.isArray(arr)) {
      return 0;
    } else {
      for (const item of arr) {
        console.log(item);
        calk = Math.max(calk, this.calculateDepth(item));
      }
      return 1 + calk;
    }
  }
}

module.exports = {
  DepthCalculator,
};
