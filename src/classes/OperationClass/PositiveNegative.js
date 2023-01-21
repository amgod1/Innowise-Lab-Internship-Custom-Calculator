import ExecuteHelpers from './ExecuteHelpers.js'

export default class PositiveNegative extends ExecuteHelpers {
  constructor(changeNumber) {
    super()
    this.changeNumber = changeNumber
  }

  execute() {
    return (Math.sign(this.changeNumber) > 0) ? `-${this.changeNumber}` : this.changeNumber.slice(1)
  }
}
