import correctValue from '../../functions/correctValue.js'

export default class CalculateDegree {
  constructor(s2) {
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
    return this.firstOperand
  }
}
