import correctValue from '../../functions/correctValue.js'
import ExecuteHelpers from './ExecuteHelpers.js'

export default class CalculateDivision extends ExecuteHelpers {
  constructor(s2) {
    super()
    this.secondOperand = s2
  }

  getSecondOperand() {
    return this.secondOperand
  }

  execute(s1) {
    this.firstOperand = s1
    return (Number.isFinite(Number(s1) / Number(this.secondOperand)))
      ? `${correctValue(Number(s1) / Number(this.secondOperand))}`
      : '0'
  }
}
