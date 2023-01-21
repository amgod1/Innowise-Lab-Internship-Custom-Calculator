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

  undo(currentValue, value1) {
    const signBefore = currentValue.slice(0, currentValue.length - 1)

    if (signBefore.length >= 1) {
      setResult(signBefore.slice(-1))
      setHelper('operand', signBefore.slice(-1))
    } else {
      setHelper('operand', '')
      setResult(value1 || 0)
      setHelper('v1', value1 || '')
    }

    return signBefore
  }
}
