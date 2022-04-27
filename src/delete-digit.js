const { NotImplementedError } = require('../extensions/index.js');

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

  let num = String(n);
  let array = [];

  for (let i = 0; i < num.length; i++) {
    array.push(num.slice(0, i) + num.slice(i + 1));
  }

  return Math.max(...array);

}

module.exports = {
  deleteDigit
};
