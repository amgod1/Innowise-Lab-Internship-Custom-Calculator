export default class Number1 {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd
  }

  undo(currentValue) {
    return currentValue.slice(0, currentValue.length - 1)
  }
}
