import correctValue from '../../functions/correctValue.js'
import ExecuteHelpers from './ExecuteHelpers.js'

export default class MathCbrt extends ExecuteHelpers {
  constructor(changeNumber) {
    super()
    this.changeNumber = changeNumber
  }

  execute() {
    return `${correctValue(Math.cbrt(this.changeNumber))}`
  }
}
