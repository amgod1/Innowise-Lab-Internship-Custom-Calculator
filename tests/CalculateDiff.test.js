import CalculateDiff from "../src/classes/OperationClass/CalculateDiff.js"

const executeTests = [
  {
    title: 'Difference of two integer numbers',
    firstValue: '3',
    secondValue: '1',
    result: '2',
  },
  {
    title: 'Difference of two big integer numbers',
    firstValue: '998877665544332211',
    secondValue: '112233445566778899',
    result: '886644219977553312',
  },
  {
    title: 'Difference of integer and float numbers',
    firstValue: '3.5',
    secondValue: '1',
    result: '2.5',
  },
  {
    title: 'Difference of two float numbers',
    firstValue: '3.7',
    secondValue: '2.1',
    result: '1.6',
  },
  {
    title: 'Difference of two float numbers (without unsuspected fractional part)',
    firstValue: '2.1',
    secondValue: '1.2',
    result: '0.9',
  },
]

const undoTests = [
  {
    title: 'Get back after difference of two integer numbers',
    firstValue: '3',
    secondValue: '1',
  },
  {
    title: 'Get back after difference of two big integer numbers',
    firstValue: '998877665544332211',
    secondValue: '112233445566778899',
  },
  {
    title: 'Get back after difference of integer and float numbers',
    firstValue: '3.5',
    secondValue: '1',
  },
  {
    title: 'Get back after difference of two float numbers',
    firstValue: '3.7',
    secondValue: '2.1',
  },
  {
    title: 'Get back after difference of two float numbers (without unsuspected fractional part)',
    firstValue: '2.1',
    secondValue: '1.2',
  },
]

describe('Testing CalculateDiff:', () => {
  executeTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new CalculateDiff(el.secondValue)
      expect(sampleTest.execute(el.firstValue)).toBe(el.result)
    })
  })

  undoTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new CalculateDiff(el.secondValue)
      expect(sampleTest.undo(sampleTest.execute(el.firstValue))).toBe(el.firstValue)
    })
  })
})
