import correctValue from '../../functions/correctValue.js'
import checkBigInt from '../../functions/checkBigInt.js'

export default class CalculateSum {
  constructor(s2) {
    this.secondOperand = s2
  }

  getSecondOperand() {
    return this.secondOperand
  }

  execute(s1) {
    return correctValue((checkBigInt(s1, this.secondOperand) + checkBigInt(this.secondOperand, s1)).toLocaleString('fullwide', { useGrouping: false }))
  }

  undo(s1) {
    return correctValue((checkBigInt(s1, this.secondOperand) - checkBigInt(this.secondOperand, s1)).toLocaleString('fullwide', { useGrouping: false }))
  }
}
