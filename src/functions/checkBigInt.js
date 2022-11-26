export default function checkBigInt(v1, v2) {
  return (
    Math.trunc(v1) === String(v1) && Math.trunc(v2) === v2
    && v1 > 9007199254740991 || v1 < -9007199254740991
    || v2 > 9007199254740991 || v2 < -9007199254740991
  )
    ? BigInt(v1)
    : Number(v1)
}
