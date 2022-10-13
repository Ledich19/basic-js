const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  let repeatTimes = options.repeatTimes ? options.repeatTimes: 0
  let separator = options.separator ? options.separator: '+'
  let addition = options.hasOwnProperty('addition') ? options.addition : ''
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes: 0
  let additionSeparator = options.additionSeparator ? options.additionSeparator: '|'

  if (repeatTimes === 0) {
    return `${str}${addition}`
  }
  let result = ''
  for (let i = 0; i < repeatTimes; i++) {
    if (i === 0) {
        result = result + `${str}` + repeater(addition, { repeatTimes: additionRepeatTimes,separator: additionSeparator})
      } else {
        result = result + `${separator}${str}` + repeater(addition, { repeatTimes: additionRepeatTimes,separator: additionSeparator})
      }
    }
  return result
  // remove line with error and write your code here
}
module.exports = {
  repeater
};
