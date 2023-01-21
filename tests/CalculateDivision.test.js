import CalculateDivision from '../src/classes/OperationClass/CalculateDivision.js'

const executeTests = [
  {
    title: 'Division of two integer numbers',
    firstValue: '30',
    secondValue: '3',
    result: '10',
  },
  {
    title: 'Division of two big integer numbers',
    firstValue: '998877665544332211',
    secondValue: '112233445566778899',
    result: '8.9',
  },
  {
    title: 'Division of integer and float numbers',
    firstValue: '30.5',
    secondValue: '5',
    result: '6.1',
  },
  {
    title: 'Division of two float numbers',
    firstValue: '5.5',
    secondValue: '1.1',
    result: '5',
  },
  {
    title: 'Division of two float numbers (without unsuspected fractional part)',
    firstValue: '2.86',
    secondValue: '1.3',
    result: '2.2',
  },
]

const undoTests = [
  {
    title: 'Get back after division of two integer numbers',
    firstValue: '30',
    secondValue: '3',
  },
  {
    title: 'Get back after division of two big integer numbers',
    firstValue: '998877665544332211',
    secondValue: '112233445566778899',
  },
  {
    title: 'Get back after division of integer and float numbers',
    firstValue: '30.5',
    secondValue: '5',
  },
  {
    title: 'Get back after division of two float numbers',
    firstValue: '5.5',
    secondValue: '1.1',
  },
  {
    title: 'Get back after division of two float numbers (without unsuspected fractional part)',
    firstValue: '2.86',
    secondValue: '1.3',
  },
]

describe('Testing CalculateDivision:', () => {
  executeTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new CalculateDivision(el.secondValue)
      expect(sampleTest.execute(el.firstValue)).toBe(el.result)
    })
  })

  undoTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new CalculateDivision(el.secondValue)
      sampleTest.execute(el.firstValue)
      expect(sampleTest.undo(false)).toBe(el.firstValue)
    })
  })
})
