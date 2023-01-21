import correctValue from '../../functions/correctValue.js'
import checkBigInt from '../../functions/checkBigInt.js'
import ExecuteHelpers from './ExecuteHelpers.js'

export default class DegreeSquare extends ExecuteHelpers {
  constructor(changeNumber) {
    super()
    this.changeNumber = changeNumber
  }

  execute() {
    return correctValue((checkBigInt(this.changeNumber, 2) ** checkBigInt(2, this.changeNumber)).toString())
  }
}
