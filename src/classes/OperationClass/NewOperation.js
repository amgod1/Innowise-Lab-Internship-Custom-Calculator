import setHelper from '../../functions/setHelper.js'
import setResult from '../../functions/setResult.js'

export default class NewOperation {
  constructor(v1, v2, operand) {
    this.v1 = v1
    this.v2 = v2
    this.operand = operand

    setHelper('v1', '')
    setHelper('v2', '')
    setHelper('operand', '')
    setResult('')
  }

  undo() {
    setHelper('v1', this.v1)
    setHelper('v2', this.v2)
    setHelper('operand', this.operand.slice(-1))
    setResult(this.v1)
    return { v1: this.v1, v2: this.v2, sign: this.operand }
  }
}
