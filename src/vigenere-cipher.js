const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction !== false ? true : false;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw Error("Incorrect arguments!");
    }
    const arr = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const lowerMessage = message.toUpperCase();
    const lowerKey = key.toUpperCase();
    let cipher = "";
    let count = 0;
    
    for (let i = 0; i < lowerMessage.length; i++) {
      if (count >= key.length) {
        count = 0;
      }
      let sing;
      if (/[A-Z]/.test(lowerMessage[i])) {
        const sum = arr.indexOf(lowerMessage[i]) + arr.indexOf(lowerKey[count]);
        const letterIndex = sum < 26 ? sum : sum - 26;
        sing = arr[letterIndex];
        count++;
      } else {
        sing = lowerMessage[i];
      }
      cipher = cipher + sing;
    }
    return this.direction ? cipher : cipher.split("").reverse().join("");
    // remove line with error and write your code here
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw Error("Incorrect arguments!");
    }
    const arr = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const lowerEncryptedMessage = encryptedMessage.toUpperCase();
    const lowerKey = key.toUpperCase();
    let message = "";
    let count = 0;
    for (let i = 0; i < lowerEncryptedMessage.length; i++) {
      let sing;
      if (count >= key.length) {
        count = 0;
      }
      if (/[A-Z]/.test(lowerEncryptedMessage[i])) {
        const sum =
          arr.indexOf(lowerEncryptedMessage[i]) - arr.indexOf(lowerKey[count]);
        const letterIndex = sum < 0 ? 26 + sum : sum;
        sing = arr[letterIndex];
        count++;
      } else {
        sing = lowerEncryptedMessage[i];
      }
      message = message + sing;
    }
    return this.direction ? message : message.split("").reverse().join("");
    // remove line with error and write your code here
  }
}
const reverseMachine = new VigenereCipheringMachine(false);
console.log(reverseMachine.encrypt("attack at dawn!", "alphonse"));
module.exports = {
  VigenereCipheringMachine,
};
