import setResult from './setResult.js'
import Number1 from '../classes/OperationClass/Number1.js'
import Number2 from '../classes/OperationClass/Number2.js'
import setHelper from './setHelper.js'

export default function createMemeoryButtons(array, obj) {
  return array.map((el) => document.querySelector(`.${el}`).onclick = () => {
    if (el === 'mc') {
      obj.resetMemory()
      obj.resetCalculator()
      setResult(obj.getMemory())
    } else if (el === 'm-plus') {
      obj.addMemory(obj.getValue1())
    } else if (el === 'm-minus') {
      obj.decreaseMemory(obj.getValue1())
    } else if (el === 'mr') {
      if (obj.getValue1() && obj.getSign() && obj.getValue2() === '') {
        obj.getMemory().split('').map((num) => obj.set2(new Number2(num)))
        setHelper('v2', obj.getValue2())
        setResult(obj.getValue2())
      } else {
        obj.resetCalculator()
        obj.getMemory().split('').map((num) => obj.set1(new Number1(num)))
        setHelper('v1', obj.getValue1())
        setResult(obj.getValue1())
      }
    }
  })
}
