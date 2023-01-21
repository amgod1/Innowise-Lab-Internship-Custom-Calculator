import correctValue from '../../functions/correctValue.js'
import checkBigInt from '../../functions/checkBigInt.js'
import ExecuteHelpers from './ExecuteHelpers.js'

export default class CalculateDiff extends ExecuteHelpers {
  constructor(s2) {
    super()
    this.secondOperand = s2
  }

  getSecondOperand() {
    return this.secondOperand
  }

  execute(s1) {
    this.firstOperand = s1
    return correctValue((checkBigInt(s1, this.secondOperand) - checkBigInt(this.secondOperand, s1)).toString())
  }

  undo() {
    this.executeHelpers(this.firstOperand, this.secondOperand)
    return this.firstOperand
  }
}
