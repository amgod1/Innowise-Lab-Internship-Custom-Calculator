import setHelper from '../../functions/setHelper.js'
import setResult from '../../functions/setResult.js'

export default class Number1 {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd
  }

  undo(currentValue) {
    const numBefore = currentValue.slice(0, currentValue.length - 1)

    if (numBefore.length >= 1) {
      setResult(numBefore)
      setHelper('v1', numBefore)
    } else {
      setResult('0')
      setHelper('v1', '')
    }

    return numBefore
  }
}
