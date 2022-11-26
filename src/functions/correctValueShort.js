export default function correctValueShort(str) {
  if (str.toString().length > 10) {
    let newStr = Number(str).toFixed(8).toString()
    while (newStr[newStr.length - 1] === '0') newStr = newStr.slice(0, -1)
    if (newStr[newStr.length - 1] === '.') newStr = newStr.slice(0, -1)
    return newStr
  }
  return str
}
