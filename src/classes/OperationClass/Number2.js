import setHelper from '../../functions/setHelper.js'
import setResult from '../../functions/setResult.js'

export default class Number2 {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd
  }

  undo(currentValue, sign) {
    const numBefore = currentValue.slice(0, currentValue.length - 1)

    if (numBefore.length >= 1) {
      setResult(numBefore)
      setHelper('v2', numBefore)
    } else if (sign.length >= 1) {
      setResult(sign.slice(-1))
      setHelper('operand', sign.slice(-1))
      setHelper('v2', '')
    }

    return numBefore
  }
}
