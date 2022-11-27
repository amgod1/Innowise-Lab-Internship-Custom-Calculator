import checkBigInt from '../../functions/checkBigInt.js'
import correctValue from '../../functions/correctValue.js'

export default class DegreeCube {
  constructor(changeNumber) {
    this.changeNumber = changeNumber
  }

  execute() {
    return correctValue((checkBigInt(this.changeNumber, 3) ** checkBigInt(3, this.changeNumber)).toString())
  }

  undo() {
    return this.changeNumber
  }
}
