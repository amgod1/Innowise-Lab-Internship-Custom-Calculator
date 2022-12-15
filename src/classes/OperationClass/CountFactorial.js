import factorial from '../../functions/factorial.js'

export default class CountFactorial {
  constructor(changeNumber) {
    this.changeNumber = changeNumber
  }

  execute() {
    return factorial(this.changeNumber).toString()
  }

  undo() {
    return this.changeNumber
  }
}
