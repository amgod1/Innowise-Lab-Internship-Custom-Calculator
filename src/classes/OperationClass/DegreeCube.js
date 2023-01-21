import checkBigInt from '../../functions/checkBigInt.js'
import correctValue from '../../functions/correctValue.js'
import ExecuteHelpers from './ExecuteHelpers.js'

export default class DegreeCube extends ExecuteHelpers {
  constructor(changeNumber) {
    super()
    this.changeNumber = changeNumber
  }

  execute() {
    return correctValue((checkBigInt(this.changeNumber, 3) ** checkBigInt(3, this.changeNumber)).toString())
  }
}
