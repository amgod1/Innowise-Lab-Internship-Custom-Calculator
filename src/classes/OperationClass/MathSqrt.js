import correctValue from '../../functions/correctValue.js'

export default class MathSqrt {
  constructor(changeNumber) {
    this.changeNumber = changeNumber
  }

  execute() {
    return `${Math.sqrt(this.changeNumber)}`
  }

  undo() {
    return this.changeNumber
  }
}
