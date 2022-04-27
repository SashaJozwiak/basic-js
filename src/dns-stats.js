const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let result = {};

  for (let i of domains) {

    let array = i.split('.').reverse()

    for (let j = 0; j < array.length; j++) {

      let k = '.' + array.slice(0, j + 1).join('.')

      if (result[k]) {
        result[k]++;
      }
      else {
        result[k] = 1;
      }

    }
  }
  return result;

}

module.exports = {
  getDNSStats
};
