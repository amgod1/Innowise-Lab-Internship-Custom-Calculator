import MemoryCalculator from './MemoryCalculator.js'
import setHelper from '../../functions/setHelper.js'
import setResult from '../../functions/setResult.js'

export default class RunCalculator extends MemoryCalculator {
  finalPercentage(command, secondValue = false) {
    this.setHistory(command)
    if (secondValue) {
      this.setValue2(command.execute(secondValue))
      setResult(this.getValue2())
      setHelper('v2', this.getValue2())
    } else {
      this.setValue1(command.execute())
      setResult(this.getValue1())
      setHelper('v1', this.getValue1())
    }
  }

  finalSwap(command, isFirst) {
    this.setHistory(command)
    if (isFirst) {
      this.setValue1(command.execute())
      setResult(this.getValue1())
      setHelper('v1', this.getValue1())
    } else {
      this.setValue2(command.execute())
      setResult(this.getValue2())
      setHelper('v2', this.getValue2())
    }
  }

  calculate(command) {
    this.setValue1(command.execute(this.getValue1()))
    this.setHistory(command)
    setResult(this.getValue1())
    setHelper('v1', this.getValue1())
  }
}
