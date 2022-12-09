import correctValue from '../../functions/correctValue.js'

export default class MathCbrt {
  constructor(changeNumber) {
    this.changeNumber = changeNumber
  }

  execute() {
    return `${correctValue(Math.cbrt(this.changeNumber))}`
  }

  undo() {
    return this.changeNumber
  }
}
