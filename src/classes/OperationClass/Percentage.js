import correctValue from '../../functions/correctValue.js'
import ExecuteHelpers from './ExecuteHelpers.js'

export default class Percentage extends ExecuteHelpers {
  constructor(mainValue) {
    super()
    this.mainValue = mainValue
    this.percent = '1'
  }

  execute(percent = this.percent) {
    this.percent = percent
    return correctValue(`${this.mainValue * (this.percent / 100)}`)
  }

  undoUnique(test = false, value1, value2) {
    if (test) return this.percent

    if (value2) {
      this.executeSecondHelper(this.percent)
      return [null, this.percent]
    } else if (value1) {
      this.executeFirstHelper(this.percent)
      return [this.percent, null]
    }
  }
}
