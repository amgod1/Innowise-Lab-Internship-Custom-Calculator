export default class PositiveNegative {
  constructor(changeNumber) {
    this.changeNumber = changeNumber
  }

  execute() {
    return (Math.sign(this.changeNumber) > 0) ? `-${this.changeNumber}` : this.changeNumber.slice(1)
  }

  undo() {
    return this.changeNumber
  }
}
