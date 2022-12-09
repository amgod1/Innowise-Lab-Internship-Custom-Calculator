import DegreeSquare from '../src/classes/OperationClass/DegreeSquare.js'

const executeTests = [
  {
    title: 'Square the positive integer number',
    value: '3',
    result: '9',
  },
  {
    title: 'Square the negative integer number',
    value: '-3',
    result: '9',
  },
  {
    title: 'Square the positive float number',
    value: '3.5',
    result: '12.25',
  },
  {
    title: 'Square the negative float number',
    value: '-3.5',
    result: '12.25',
  },
  {
    title: 'Square the positive float number (without unsuspected fractional part)',
    value: '1.1',
    result: '1.21',
  },
  {
    title: 'Square the negative float number (without unsuspected fractional part)',
    value: '-1.1',
    result: '1.21',
  },
  {
    title: 'Square the positive float number (without unsuspected fractional part) [one more try]',
    value: '238.4',
    result: '56834.56',
  },
  {
    title: 'Square the negative float number (without unsuspected fractional part) [one more try]',
    value: '-238.4',
    result: '56834.56',
  },
]

const undoTests = [
  {
    title: 'Get back after square the positive integer number',
    value: '3',
  },
  {
    title: 'Get back after square the negative integer number',
    value: '-3',
  },
  {
    title: 'Get back after square the positive float number',
    value: '3.5',
  },
  {
    title: 'Get back after square the negative float number',
    value: '-3.5',
  },
  {
    title: 'Get back after square the positive float number (without unsuspected fractional part)',
    value: '1.1',
  },
  {
    title: 'Get back after square the negative float number (without unsuspected fractional part)',
    value: '-1.1',
  },
  {
    title: 'Get back after square the positive float number (without unsuspected fractional part) [one more try]',
    value: '238.4',
  },
  {
    title: 'Get back after square the negative float number (without unsuspected fractional part) [one more try]',
    value: '-238.4',
  },
]

describe('Testing DegreeSquare:', () => {
  executeTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new DegreeSquare(el.value)
      expect(sampleTest.execute()).toBe(el.result)
    })
  })

  undoTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new DegreeSquare(el.value)
      sampleTest.execute()
      expect(sampleTest.undo()).toBe(el.value)
    })
  })
})
