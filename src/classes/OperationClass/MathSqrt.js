import correctValue from '../../functions/correctValue.js'
import ExecuteHelpers from './ExecuteHelpers.js'

export default class MathSqrt extends ExecuteHelpers {
  constructor(changeNumber) {
    super()
    this.changeNumber = changeNumber
  }

  execute() {
    return `${correctValue(Math.sqrt(this.changeNumber))}`
  }
}
