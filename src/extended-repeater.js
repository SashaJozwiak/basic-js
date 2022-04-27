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
function repeater(str, options) {

  let result = [];
  let addResult = [];

  let count = options.hasOwnProperty("repeatTimes") ? options.repeatTimes : 1;
  let separat = options.hasOwnProperty("separator") ? options.separator + "" : "+";
  let additionStr = options.hasOwnProperty("addition") ? options.addition + "" : "";
  let additionCount = options.hasOwnProperty("additionRepeatTimes") ? options.additionRepeatTimes : 1;
  let additionSeparat = options.hasOwnProperty("additionSeparator") ? options.additionSeparator : "|";

  for (let i = 0; i < additionCount; i++) {
    addResult.push(additionStr)
  }

  addResult = addResult.join(additionSeparat);

  for (let i = 0; i < count; i++) {
    result.push(str + addResult)
  }

  return result.join(separat)

}

module.exports = {
  repeater
};
