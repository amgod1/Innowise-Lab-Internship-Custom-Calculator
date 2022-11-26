import correctValue from '../../functions/correctValue.js'


export default class Percentage {
  constructor(mainValue) {
    this.mainValue = mainValue
    this.percent = '1'
  }

  execute(percent = this.percent) {
    this.percent = percent
    return correctValue(`${this.mainValue * (this.percent / 100)}`)
  }

  undo(percent = this.percent) {
    return percent
  }
}
