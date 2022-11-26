import correctValue from '../../functions/correctValue.js'

// function changeSign(num, check) {
//   return (check < 0) ? -num : num
// }

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
    // return (s1 < 0 && this.secondOperand % 2 === 1)
    //   ? `${changeSign(correctValue(-((-s1) ** (1 / this.secondOperand))), this.firstOperand)}`
    //   : `${changeSign(correctValue(s1 ** (1 / this.secondOperand)), this.firstOperand)}`
  }
}
