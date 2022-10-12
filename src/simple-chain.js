const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
    // remove line with error and write your code here
  },
  addLink(value) {
    if (this.chain.length === 0) {
      this.chain = this.chain.concat(`( ${value} )`)
    } else {
      this.chain = this.chain.concat(`( ${value} )`)
    }
    return this
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = []
      throw Error('You can\'t remove incorrect link!')
    } else {

      this.chain.splice(position - 1 ,1)
      return this
    }
    // remove line with error and write your code here
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
    // remove line with error and write your code here
  },
  finishChain() {
    const answ = this.chain.join('~~')
    this.chain = []
    return answ
    // remove line with error and write your code here
  }
};

//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0))
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'))
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2))
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4))

module.exports = {
  chainMaker
};
