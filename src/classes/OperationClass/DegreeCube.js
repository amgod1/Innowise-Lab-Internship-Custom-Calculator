import checkBigInt from '../../functions/checkBigInt.js'
import correctValueShort from '../../functions/correctValueShort.js'
import correctValue from '../../functions/correctValue.js'

export default class DegreeCube {
  constructor(changeNumber) {
    this.changeNumber = changeNumber
  }

  execute() {
    return correctValue((checkBigInt(this.changeNumber, 3) ** checkBigInt(3, this.changeNumber)).toLocaleString('fullwide', { useGrouping: false }))
  }

  undo() {
    return this.changeNumber
  }
}
