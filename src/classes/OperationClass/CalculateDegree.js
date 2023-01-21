import correctValue from '../../functions/correctValue.js'
import ExecuteHelpers from './ExecuteHelpers.js'

export default class CalculateDegree extends ExecuteHelpers {
  constructor(s2) {
    super()
    this.secondOperand = s2
  }

  getSecondOperand() {
    return this.secondOperand
  }

  execute(s1) {
    this.firstOperand = s1
    return `${correctValue(Number(s1) ** Number(this.secondOperand))}`
  }

  undo() {
    this.executeHelpers(this.firstOperand, this.secondOperand)
    return this.firstOperand
  }
}
