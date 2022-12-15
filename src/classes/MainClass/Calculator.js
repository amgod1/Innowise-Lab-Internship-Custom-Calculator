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

class Calculator extends RunCalculator {
  set1(command, value = this._value1) {
    this.setValue1(command.execute(value))
    this.setHistory(command)
  }

  set2(command, value = this._value2) {
    this.setValue2(command.execute(value))
    this.setHistory(command)
  }

  input(element) {
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
      }
    } else if (this.getValue2()) {
      this.run()
      this.setValue2('')
      setHelper('v2', this.getValue2())
      if (command.newSign !== this.getSign().slice(-1)) {
        this.setHistory(command)
      }
    }
    this._sign = command.execute(this.getSign())
  }

  initSwap() {
    if (!!this.getValue2() && this.getValue2() !== '0') {
      if (this.getUniqueAction() === 'x!' && this.getValue2() <= 0) {
        return
      } else if (this.getUniqueAction() === '2√x' && this.getValue2() <= 0) {
        return
      } else this.finalSwap(selectAction(this.getUniqueAction(), this.getValue2()), false)
    } else if (!!this.getValue1() && this.getValue1() !== '0') {
      if (this.getUniqueAction() === 'x!' && this.getValue1() <= 0) {
        return
      } else if (this.getUniqueAction() === '2√x' && this.getValue1() <= 0) {
        return
      } else this.finalSwap(selectAction(this.getUniqueAction(), this.getValue1()), true)
    }
  }

  initPercentage() {
    if (!!this.getValue2() && this.getValue2() !== '0') {
      this.finalPercentage(selectAction('%', this.getValue1()), this.getValue2())
    } else if (!!this.getValue1() && this.getValue1() !== '0') {
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
      if (this.getValue1().length >= 1) {
        setResult(this.getValue1())
        setHelper('v1', this.getValue1())
      } else {
        setResult('0')
        setHelper('v1', '')
      }
    } else if (command instanceof Number2) {
      this.setValue2(command.undo(this.getValue2()))
      if (this.getValue2().length >= 1) {
        setResult(this.getValue2())
        setHelper('v2', this.getValue2())
      } else if (this.getSign().length >= 1) {
        setResult(this.getSign().slice(-1))
        setHelper('operand', this.getSign().slice(-1))
        setHelper('v2', '')
      }
    } else if (command instanceof SignEditor) {
      this._sign = command.undo(this.getSign())
      if (this.getSign().length >= 1) {
        setResult(this.getSign().slice(-1))
        setHelper('operand', this.getSign().slice(-1))
      } else {
        setHelper('operand', '')
        setResult((this.getValue1()) ? this.getValue1() : 0)
        setHelper('v1', (this.getValue1()) ? this.getValue1() : '')
      }
    } else if (checkInstance(command)) {
      this.setValue1(command.undo())
      this.setValue2(command.getSecondOperand())
      setHelper('v2', (command.getSecondOperand()))
      setHelper('v1', this.getValue1())
      setResult(this.getValue1())
    } else if (checkInstanceUnique(command)) {
      if (!!this.getValue2() && this.getValue2() !== '0') {
        this.setValue2(command.undo())
        setResult(this.getValue2())
        setHelper('v2', this.getValue2())
      } else if (!!this.getValue1() && this.getValue1() !== '0') {
        this.setValue1(command.undo())
        setResult(this.getValue1())
        setHelper('v1', this.getValue1())
      }
    } else {
      setResult((this.getValue1()) ? this.getValue1() : '0')
      setHelper('v1', (this.getValue1() && this.getValue1() !== '0') ? this.getValue1() : '')
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

const acBtn = document.querySelector('.ac')
acBtn.onclick = () => calc.resetCalculator()

const equalBtn = document.querySelector('.equal')
equalBtn.onclick = () => calc.run()

const percentageBtn = document.querySelector('.percent')
percentageBtn.onclick = () => calc.initPercentage()

const backBtn = document.querySelector('.back')
backBtn.onclick = () => calc.undoLast()
