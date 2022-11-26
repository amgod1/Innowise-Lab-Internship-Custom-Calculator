export default function correctValue(str) {
  if (str.toString().length > 15 && str.toString().split('').includes('.')) {
    let newStr = Number(str).toFixed(10).toString()
    while (newStr[newStr.length - 1] === '0') newStr = newStr.slice(0, -1)
    if (newStr[newStr.length - 1] === '.') newStr = newStr.slice(0, -1)
    return newStr
  }
  return str
}
