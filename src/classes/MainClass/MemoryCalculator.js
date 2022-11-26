import CreateCalculator from './CreateCalculator.js'
import correctValue from '../../functions/correctValue.js'

export default class extends CreateCalculator {
  constructor(options) {
    super(options)
    this._memory = '0'
  }

  getMemory() {
    return this._memory
  }

  addMemory(value) {
    this._memory = correctValue(Number(this._memory) + Number(value))
  }

  decreaseMemory(value) {
    this._memory = correctValue(Number(this._memory) - Number(value))
  }

  resetMemory() {
    this._memory = '0'
  }
}
