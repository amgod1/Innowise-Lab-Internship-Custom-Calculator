import setResult from './setResult.js'

export default function createMemeoryButtons(array, obj) {
  return array.map((el) => document.querySelector(`.${el}`).onclick = () => {
    if (el === 'mc') {
      obj.resetMemory()
      setResult(obj.getMemory())
    } else if (el === 'm-plus') {
      obj.addMemory(obj.getValue1())
    } else if (el === 'm-minus') {
      obj.decreaseMemory(obj.getValue1())
    } else if (el === 'mr') {
      obj.resetCalculator()
      setResult(obj.getMemory())
    }
  })
}
