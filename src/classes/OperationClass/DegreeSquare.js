import correctValue from '../../functions/correctValue.js'
import checkBigInt from '../../functions/checkBigInt.js'

export default class DegreeSquare {
  constructor(changeNumber) {
    this.changeNumber = changeNumber
  }

  execute() {
    return correctValue((checkBigInt(this.changeNumber, 2) ** checkBigInt(2, this.changeNumber)).toString())
  }

  undo() {
    return this.changeNumber
  }
}
