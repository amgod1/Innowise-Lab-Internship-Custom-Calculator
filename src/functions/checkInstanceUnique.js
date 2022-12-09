import PositiveNegative from '../classes/OperationClass/PositiveNegative.js'
import DegreeSquare from '../classes/OperationClass/DegreeSquare.js'
import DegreeCube from '../classes/OperationClass/DegreeCube.js'
import CountFactorial from '../classes/OperationClass/CountFactorial.js'
import MathSqrt from '../classes/OperationClass/MathSqrt.js'
import MathCube from '../classes/OperationClass/MathCbrt.js'
import Percentage from '../classes/OperationClass/Percentage.js'

export default function checkInstanceUnique(item) {
  return (
    item instanceof PositiveNegative
    || item instanceof DegreeSquare
    || item instanceof DegreeCube
    || item instanceof CountFactorial
    || item instanceof MathSqrt
    || item instanceof MathCube
    || item instanceof Percentage
  )
}
