import CalculateMult from '../src/classes/OperationClass/CalculateMult.js'

const executeTests = [
  {
    title: 'Multiplication of two integer numbers',
    firstValue: '3',
    secondValue: '2',
    result: '6',
  },
  {
    title: 'Multiplication of two big integer numbers',
    firstValue: '998877665544332211',
    secondValue: '112233445566778899',
    result: '112107482103740987777903741240815689',
  },
  {
    title: 'Multiplication of big and classic integer numbers',
    firstValue: '998877665544332211',
    secondValue: '2',
    result: '1997755331088664422',
  },
  {
    title: 'Multiplication of integer and float numbers',
    firstValue: '3.5',
    secondValue: '5',
    result: '17.5',
  },
  {
    title: 'Multiplication of two float numbers',
    firstValue: '3.7',
    secondValue: '2.5',
    result: '9.25',
  },
  {
    title: 'Multiplication of two float numbers (without unsuspected fractional part)',
    firstValue: '1.1',
    secondValue: '1.3',
    result: '1.43',
  },
]

const undoTests = [
  {
    title: 'Get back after multiplication of two integer numbers',
    firstValue: '3',
    secondValue: '1',
  },
  {
    title: 'Get back after multiplication of two big integer numbers',
    firstValue: '998877665544332211',
    secondValue: '112233445566778899',
  },
  {
    title: 'Get back after multiplication of big and classic integer numbers',
    firstValue: '998877665544332211',
    secondValue: '2',
  },
  {
    title: 'Get back after multiplication of integer and float numbers',
    firstValue: '3.5',
    secondValue: '1',
  },
  {
    title: 'Get back after multiplication of two float numbers',
    firstValue: '3.7',
    secondValue: '2.1',
  },
  {
    title: 'Get back after multiplication of two float numbers (without unsuspected fractional part)',
    firstValue: '2.1',
    secondValue: '1.2',
  },
]

describe('Testing CalculateDegree:', () => {
  executeTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new CalculateMult(el.secondValue)
      expect(sampleTest.execute(el.firstValue)).toBe(el.result)
    })
  })

  undoTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new CalculateMult(el.secondValue)
      expect(sampleTest.undo(sampleTest.execute(el.firstValue))).toBe(el.firstValue)
    })
  })
})
