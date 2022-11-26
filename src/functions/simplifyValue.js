export default function simplifyValue(string) {
  return (string[0] === '0' && string.length > 1) ? string.slice(1, string.length) : string
}
