export default function createUniqueButtons(array, obj) {
  return array.map((el) => document.querySelector(`.${el}`).onclick = () => {
    obj.setUniqueAction(document.querySelector(`.${el}`).textContent)
    obj.initSwap()
  })
}
