import correctValue from '../../functions/correctValue.js'

export default class CalculateDivision {
  constructor(s2) {
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

  undo() {
    return this.firstOperand
    // return `${correctValue(Number(s1) * Number(this.secondOperand))}`
  }
}
