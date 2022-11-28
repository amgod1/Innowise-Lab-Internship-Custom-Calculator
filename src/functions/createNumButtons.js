import SignEditor from '../classes/OperationClass/SignEditor.js'

export default function createNumButtons(obj) {
  document.addEventListener('keydown', (e) => {
    for (let i = 0; i < 10; i++) {
      if (e.code === `Numpad${i}`) {
        obj.input(`${i}`)
      }
    }

    if (e.code === 'NumpadDecimal') {
      obj.input('.')
    } else if (e.code === 'NumpadAdd') {
      obj.setSign(new SignEditor('+'))
    } else if (e.code === 'NumpadSubtract') {
      obj.setSign(new SignEditor('-'))
    } else if (e.code === 'NumpadMultiply') {
      obj.setSign(new SignEditor('*'))
    } else if (e.code === 'NumpadDivide') {
      obj.setSign(new SignEditor('/'))
    } else if (e.code === 'NumpadEnter') {
      obj.run()
    } else if (e.code === 'Backspace') {
      obj.undoLast()
    }
  })
}
