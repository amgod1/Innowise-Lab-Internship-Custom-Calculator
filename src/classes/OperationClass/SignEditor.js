import setHelper from '../../functions/setHelper.js'
import setResult from '../../functions/setResult.js'

export default class SignEditor {
  constructor(newSign) {
    this.newSign = newSign
  }

  execute(currentValue) {
    if (currentValue[currentValue.length - 1] === this.newSign) {
      setResult(currentValue[currentValue.length - 1])
      setHelper('operand', currentValue[currentValue.length - 1])
      return currentValue
    }
    const newValue = currentValue + this.newSign
    setResult(newValue[newValue.length - 1])
    setHelper('operand', newValue[newValue.length - 1])
    return newValue
  }

  undo(currentValue) {
    return currentValue.slice(0, currentValue.length - 1)
  }
}
