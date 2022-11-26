import SignEditor from '../classes/OperationClass/SignEditor.js'

export default function createButtons(array, obj) {
  return array.map((el) => document.querySelector(`.${el}`).onclick = () => (
    (!!Number(document.querySelector(`.${el}`).textContent)
    || document.querySelector(`.${el}`).textContent === '0'
    || document.querySelector(`.${el}`).textContent === '.')
      ? obj.input(document.querySelector(`.${el}`).textContent)
      : (document.querySelector(`.${el}`).textContent === 'xy')
        ? obj.setSign(new SignEditor('^'))
        : (document.querySelector(`.${el}`).textContent === 'y√x')
          ? obj.setSign(new SignEditor('√'))
          : obj.setSign(new SignEditor(document.querySelector(`.${el}`).textContent))))
}
