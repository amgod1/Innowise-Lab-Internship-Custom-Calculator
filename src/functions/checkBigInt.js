export default function checkBigInt(v1, v2) {
  return (
    v1 % 1 === 0 && v2 % 1 === 0
    && v1 > 9007199254740991 || v1 < -9007199254740991
    || v2 > 9007199254740991 || v2 < -9007199254740991
  )
    ? BigInt(v1)
    : Number(v1)
}
