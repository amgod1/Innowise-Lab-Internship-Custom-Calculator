import setHelper from '../../functions/setHelper.js'
import setResult from '../../functions/setResult.js'

export default class ExecuteHelpers {
  executeHelpers(value1, value2) {
    setResult(value1)
    setHelper('v1', value1)
    setHelper('v2', value2)
  }

  executeFirstHelper(value) {
    setResult(value)
    setHelper('v1', value)
  }

  executeSecondHelper(value) {
    setResult(value)
    setHelper('v2', value)
  }

  undo(value1, value2) {
    if (value2) {
      this.executeSecondHelper(this.changeNumber)
      return [null, this.changeNumber]
    } else if (value1) {
      this.executeFirstHelper(this.changeNumber)
      return [this.changeNumber, null]
    }
  }
}
