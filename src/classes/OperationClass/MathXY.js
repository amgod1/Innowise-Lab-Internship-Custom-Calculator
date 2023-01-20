import correctValue from '../../functions/correctValue.js'

export default class MathXY {
  constructor(s2) {
    this.secondOperand = s2
  }

  getSecondOperand() {
    return this.secondOperand
  }

  execute(s1) {
    this.firstOperand = s1
    return (s1 < 0)
      ? `${correctValue(-((-s1) ** (1 / this.secondOperand)))}`
      : `${correctValue(s1 ** (1 / this.secondOperand))}`
  }

  undo() {
    return this.firstOperand
  }
}
