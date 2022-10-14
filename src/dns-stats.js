const { NotImplementedError } = require("../extensions/index.js");

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
  const answer = {};

  for (const elem of domains) {
    let elemArr = elem.split(".");
    const arrDns = [];
    while (elemArr.length > 0) {
      arrDns.push(elemArr.join("."));
      elemArr.splice(0, 1);
    }

    for (const dns of arrDns) {
      const dnsItem = dns.split(".").reverse().join(".");
      if (answer.hasOwnProperty(`.${dnsItem}`)) {
        answer[`.${dnsItem}`] = answer[`.${dnsItem}`] + 1;
      } else {
        answer[`.${dnsItem}`] = 1;
      }
    }
  }

  return answer;
  // remove line with error and write your code here
}
console.log(getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]));

module.exports = {
  getDNSStats,
};
