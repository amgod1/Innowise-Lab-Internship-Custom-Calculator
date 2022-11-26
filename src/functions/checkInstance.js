import CalculateSum from '../classes/OperationClass/CalculateSum.js'
import CalculateDiff from '../classes/OperationClass/CalculateDiff.js'
import CalculateMult from '../classes/OperationClass/CalculateMult.js'
import CalculateDivision from '../classes/OperationClass/CalculateDivision.js'
import CalculateDegree from '../classes/OperationClass/CalculateDegree.js'
import MathXY from '../classes/OperationClass/MathXY.js'

export default function checkInstance(item) {
  return (
    item instanceof CalculateSum
    || item instanceof CalculateDiff
    || item instanceof CalculateMult
    || item instanceof CalculateDivision
    || item instanceof CalculateDegree
    || item instanceof MathXY
  )
}
