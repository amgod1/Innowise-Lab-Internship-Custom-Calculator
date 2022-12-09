import CalculateSum from '../classes/OperationClass/CalculateSum.js'
import CalculateDiff from '../classes/OperationClass/CalculateDiff.js'
import CalculateMult from '../classes/OperationClass/CalculateMult.js'
import CalculateDivision from '../classes/OperationClass/CalculateDivision.js'
import PositiveNegative from '../classes/OperationClass/PositiveNegative.js'
import DegreeSquare from '../classes/OperationClass/DegreeSquare.js'
import DegreeCube from '../classes/OperationClass/DegreeCube.js'
import CountFactorial from '../classes/OperationClass/CountFactorial.js'
import MathSqrt from '../classes/OperationClass/MathSqrt.js'
import MathCbrt from '../classes/OperationClass/MathCbrt.js'
import Percentage from '../classes/OperationClass/Percentage.js'
import CalculateDegree from '../classes/OperationClass/CalculateDegree.js'
import MathXY from '../classes/OperationClass/MathXY.js'

export default function selectAction(sign, value) {
  switch (sign) {
    case '+': {
      return new CalculateSum(value)
    }
    case '-': {
      return new CalculateDiff(value)
    }
    case 'x': {
      return new CalculateMult(value)
    }
    case '/': {
      return new CalculateDivision(value)
    }
    case '+/-': {
      return new PositiveNegative(value)
    }
    case 'x2': {
      return new DegreeSquare(value)
    }
    case 'x3': {
      return new DegreeCube(value)
    }
    case 'x!': {
      return new CountFactorial(value)
    }
    case '2√x': {
      return new MathSqrt(value)
    }
    case '3√x': {
      return new MathCbrt(value)
    }
    case '%': {
      return new Percentage(value)
    }
    case '^': {
      return new CalculateDegree(value)
    }
    case '√': {
      return new MathXY(value)
    }
    // no default
  }
}
