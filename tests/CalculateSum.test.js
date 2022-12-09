import CalculateSum from '../src/classes/OperationClass/CalculateSum.js'

const executeTests = [
  {
    title: 'Sum of two integer numbers',
    firstValue: '3',
    secondValue: '1',
    result: '4',
  },
  {
    title: 'Sum of two big integer numbers',
    firstValue: '112233445566778899',
    secondValue: '998877665544332211',
    result: '1111111111111111110',
  },
  {
    title: 'Sum of big and classic integer numbers',
    firstValue: '112233445566778899',
    secondValue: '1',
    result: '112233445566778900',
  },
  {
    title: 'Sum of integer and float numbers',
    firstValue: '3.5',
    secondValue: '1',
    result: '4.5',
  },
  {
    title: 'Sum of two float numbers',
    firstValue: '3.5',
    secondValue: '1.5',
    result: '5',
  },
  {
    title: 'Sum of two float numbers (without unsuspected fractional part)',
    firstValue: '1.3',
    secondValue: '1.1',
    result: '2.4',
  },
]

const undoTests = [
  {
    title: 'Get back after sum of two integer numbers',
    firstValue: '3',
    secondValue: '1',
  },
  {
    title: 'Get back after sum of two big integer numbers',
    firstValue: '112233445566778899',
    secondValue: '998877665544332211',
  },
  {
    title: 'Get back after sum of big and classic integer numbers',
    firstValue: '112233445566778899',
    secondValue: '1',
  },
  {
    title: 'Get back after sum of integer and float numbers',
    firstValue: '3.5',
    secondValue: '1',
  },
  {
    title: 'Get back after sum of two float numbers',
    firstValue: '1.5',
    secondValue: '2.5',
  },
  {
    title: 'Get back after sum of two float numbers (without unsuspected fractional part)',
    firstValue: '1.3',
    secondValue: '1.1',
  },
]

describe('Testing CalculateSum:', () => {
  executeTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new CalculateSum(el.secondValue)
      expect(sampleTest.execute(el.firstValue)).toBe(el.result)
    })
  })

  undoTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new CalculateSum(el.secondValue)
      expect(sampleTest.undo(sampleTest.execute(el.firstValue))).toBe(el.firstValue)
    })
  })
})
