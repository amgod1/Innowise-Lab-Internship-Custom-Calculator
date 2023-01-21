// classes:
import RunCalculator from './RunCalculator.js'
import Number1 from '../OperationClass/Number1.js'
import Number2 from '../OperationClass/Number2.js'
import SignEditor from '../OperationClass/SignEditor.js'

// functions:
import createButtons from '../../functions/createButtons.js'
import createUniqueButtons from '../../functions/createUniqueButtons.js'
import createMemoryButtons from '../../functions/createMemoryButtons.js'
import setHelper from '../../functions/setHelper.js'
import setResult from '../../functions/setResult.js'
import selectAction from '../../functions/selectAction.js'
import checkInstance from '../../functions/checkInstance.js'
import checkInstanceUnique from '../../functions/checkInstanceUnique.js'
import createNumButtons from '../../functions/createNumButtons.js'
import NewOperation from '../OperationClass/NewOperation.js'

class Calculator extends RunCalculator {
  set1(command, value = this.getValue1()) {
    this.setValue1(command.execute(value))
    this.setHistory(command)
  }

  set2(command, value = this.getValue2()) {
    this.setValue2(command.execute(value))
    this.setHistory(command)
  }

  input(element) {
    if (checkInstance(this.getHistory()[this.getHistory().length - 1])) {
      this.setHistory(new NewOperation(this.getValue1(), this.getValue2(), this.getSign()))
      this.setValue1('')
      this.setValue2('')
      this.updateSign('')
    }
    if (this.getValue2() === '' && this.getSign() === '') {
      if (this.getValue1() === '0' && element === '0') {
        setResult('0')
        setHelper('v1', '0')
      } else if (element === '.') {
        if (this.getValue1() === '') {
          this.set1(new Number1('0'))
          this.set1(new Number1(element))
        } else if (!this.getValue1().includes('.')) {
          this.set1(new Number1(element))
        }
      } else if (this.getValue1().length >= 1 && this.getValue1()[0] === '0' && this.getValue1()[1] !== '.' && this.getValue1()[1] !== '0') {
        this.undoLast()
        this.set1(new Number1(element))
      } else this.set1(new Number1(element))
      setResult(this.getValue1())
      setHelper('v1', this.getValue1())
    } else {
      if (this.getValue2() === '0' && element === '0') {
        setResult('0')
      } else if (element === '.') {
        if (this.getValue2() === '') {
          this.set2(new Number2('0'))
          this.set2(new Number2(element))
        } else if (!this.getValue2().includes('.')) {
          this.set2(new Number2(element))
        }
      } else if (this.getValue2().length >= 1 && this.getValue2()[0] === '0' && this.getValue2()[1] !== '.' && this.getValue2()[1] !== '0') {
        this.undoLast()
        this.set2(new Number2(element))
      } else this.set2(new Number2(element))
      setResult(this.getValue2())
      setHelper('v2', this.getValue2())
    }
  }

  setSign(command) {
    if (!this.getValue1()) {
      this.set1(new Number1('0'))
      setHelper('v1', this.getValue1())
      this.setHistory(command)
    } else if (command.newSign !== this.getSign().slice(-1) && this.getValue2() === '') {
      this.setHistory(command)
    } else if (checkInstance(this.getHistory()[this.getHistory().length - 1])) {
      this.setValue2('')
      setHelper('v2', this.getValue2())
      if (command.newSign !== this.getSign().slice(-1)) {
        this.setHistory(command)
      } else this.setHistory(null)
    } else if (this.getValue2()) {
      this.run()
      this.setValue2('')
      setHelper('v2', this.getValue2())
      if (command.newSign !== this.getSign().slice(-1)) {
        this.setHistory(command)
      } else this.setHistory(null)
    }
    this._sign = command.execute(this.getSign())
  }

  initSwap() {
    const [first, second] = [Number(this.getValue1()), Number(this.getValue2())]

    if (!!second) {
      if (second <= 0 && this.getUniqueAction() === 'x!' || this.getUniqueAction() === '2√x') {
        return
      } else this.finalSwap(selectAction(this.getUniqueAction(), this.getValue2()), false)
    } else if (!!first) {
      if (first <= 0 && this.getUniqueAction() === 'x!' || this.getUniqueAction() === '2√x') {
        return
      } else this.finalSwap(selectAction(this.getUniqueAction(), this.getValue1()), true)
    }
  }

  initPercentage() {
    if (!!Number(this.getValue2())) {
      this.finalPercentage(selectAction('%', this.getValue1()), this.getValue2())
    } else if (!!Number(this.getValue1())) {
      this.finalPercentage(selectAction('%', this.getValue1()))
    }
  }

  run() {
    if (!!this.getSign() && !!this.getValue2()) {
      if (this.getSign().slice(-1) === '√' && this.getValue1() <= 0 && this.getValue2() % 2 === 0) { return }
      this.calculate(selectAction(this.getSign().slice(-1), this.getValue2()))
    } else if (!!this.getValue1() && !!this.getSign() && !this.getValue2()) {
      this.getValue1().split('').map((el) => this.set2(new Number2(el)))
      setHelper('v2', this.getValue2())
      this.calculate(selectAction(this.getSign().slice(-1), this.getValue1()))
    }
  }

  undoLast() {
    const command = this._history.pop()

    if (command instanceof Number1) {
      this.setValue1(command.undo(this.getValue1()))
    }

    if (command instanceof Number2) {
      this.setValue2(command.undo(this.getValue2(), this.getSign()))
    }

    if (command instanceof SignEditor) {
      this.updateSign(command.undo(this.getSign(), this.getValue1()))
    }

    if (checkInstance(command)) {
      this.setValue1(command.undo())
      this.setValue2(command.getSecondOperand())
    }

    if (checkInstanceUnique(command)) {
      const [first, second] = command.undoUnique(false, !!Number(this.getValue1()), !!Number(this.getValue2()))
      first && this.setValue1(first)
      second && this.setValue2(second)
    }

    if (command instanceof NewOperation) {
      const numbersBefore = command.undo()
      this.setValue1(numbersBefore.v1)
      this.setValue2(numbersBefore.v2)
      this.updateSign(numbersBefore.sign)
    }

    if (this.getHistory()[this.getHistory().length - 1] instanceof NewOperation || command === null) {
      this.undoLast()
    }
  }
}

const calc = new Calculator({
  value1: '',
  value2: '',
  sign: '',
  history: [],
})

createButtons(['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine', 'dot', 'plus', 'minus', 'multiply', 'division', 'degree-y', 'root-y'], calc)
createUniqueButtons(['plus-minus', 'degree2', 'degree3', 'factorial', 'root2', 'root3'], calc)
createMemoryButtons(['mc', 'm-plus', 'm-minus', 'mr'], calc)
createNumButtons(calc)

document.querySelector('.ac').onclick = () => calc.resetCalculator()
document.querySelector('.equal').onclick = () => calc.run()
document.querySelector('.percent').onclick = () => calc.initPercentage()
document.querySelector('.back').onclick = () => calc.undoLast()
