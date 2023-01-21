import setHelper from '../../functions/setHelper.js'
import setResult from '../../functions/setResult.js'

export default class CreateCalculator {
  constructor(options) {
    this._value1 = options.value1
    this._value2 = options.value2
    this._sign = options.sign
    this._history = options.history
    this._uniqueAction = ''
  }

  resetCalculator() {
    this._value1 = ''
    this._value2 = ''
    this._sign = ''
    this._history = []

    setResult('0')
    setHelper('v1', '')
    setHelper('v2', '')
    setHelper('operand', '')
  }

  // make use of value 1

  setValue1(newValue) {
    this._value1 = newValue
  }

  getValue1() {
    return this._value1
  }

  // make use of value 1

  setValue2(newValue) {
    this._value2 = newValue
  }

  getValue2() {
    return this._value2
  }

  // make use of sign

  updateSign(newValue) {
    this._sign = newValue
  }

  getSign() {
    return this._sign
  }

  // make use of history

  setHistory(newValue) {
    this._history = [...this.getHistory(), newValue]
  }

  getHistory() {
    return this._history
  }

  // make use of uniqueAction

  setUniqueAction(newValue) {
    this._uniqueAction = newValue
  }

  getUniqueAction() {
    return this._uniqueAction
  }
}
