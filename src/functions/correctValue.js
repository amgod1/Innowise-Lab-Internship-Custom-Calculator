export default function correctValue(str) {
  if (str.toString().split('').includes('.') && str.toString().slice(str.toString().indexOf('.') + 1) >= 15) {
    let newStr = Number(str).toFixed(11).toString()
    while (newStr[newStr.length - 1] === '0') newStr = newStr.slice(0, -1)
    if (newStr[newStr.length - 1] === '.') newStr = newStr.slice(0, -1)
    return newStr
  }
  return str
}
