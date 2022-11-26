import checkBigInt from '../../functions/checkBigInt.js'

export default class PositiveNegative {
  constructor(changeNumber) {
    this.changeNumber = changeNumber
  }

  execute() {
    return (Math.sign(this.changeNumber) > 0) ? `-${this.changeNumber}` : this.changeNumber.slice(1)
  }

  undo() {
    return `${checkBigInt((this.changeNumber), (Math.trunc(this.changeNumber) == this.changeNumber) ? 1 : 1.1)}`
  }
}
