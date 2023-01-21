import factorial from '../../functions/factorial.js'
import ExecuteHelpers from './ExecuteHelpers.js'

export default class CountFactorial extends ExecuteHelpers {
  constructor(changeNumber) {
    super()
    this.changeNumber = changeNumber
  }

  execute() {
    return factorial(this.changeNumber).toString()
  }
}
