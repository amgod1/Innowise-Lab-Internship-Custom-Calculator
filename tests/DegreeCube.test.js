import DegreeCube from "../src/classes/OperationClass/DegreeCube.js"

const executeTests = [
  {
    title: 'Cube the positive integer number',
    value: '3',
    result: '27',
  },
  {
    title: 'Cube the negative integer number',
    value: '-3',
    result: '-27',
  },
  {
    title: 'Cube the positive float number',
    value: '3.5',
    result: '42.875',
  },
  {
    title: 'Cube the negative float number',
    value: '-3.5',
    result: '-42.875',
  },
  {
    title: 'Cube the positive float number (without unsuspected fractional part)',
    value: '1.1',
    result: '1.331',
  },
  {
    title: 'Cube the negative float number (without unsuspected fractional part)',
    value: '-1.1',
    result: '-1.331',
  },
  {
    title: 'Cube the positive float number (without unsuspected fractional part)',
    value: '27.1',
    result: '19902.511',
  },
  {
    title: 'Cube the negative float number (without unsuspected fractional part)',
    value: '-27.1',
    result: '-19902.511',
  },
]

const undoTests = [
  {
    title: 'Get back after cube the positive integer number',
    value: '3',
  },
  {
    title: 'Get back after cube the negative integer number',
    value: '-3',
  },
  {
    title: 'Get back after cube the positive float number',
    value: '3.5',
  },
  {
    title: 'Get back after cube the negative float number',
    value: '-3.5',
  },
  {
    title: 'Get back after cube the positive float number (without unsuspected fractional part)',
    value: '1.1',
  },
  {
    title: 'Get back after cube the negative float number (without unsuspected fractional part)',
    value: '-1.1',
  },
  {
    title: 'Get back after cube the positive float number (without unsuspected fractional part)',
    value: '27.1',
  },
  {
    title: 'Get back after cube the negative float number (without unsuspected fractional part)',
    value: '-27.1',
  },
]

describe('Testing DegreeCube:', () => {
  executeTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new DegreeCube(el.value)
      expect(sampleTest.execute()).toBe(el.result)
    })
  })

  undoTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new DegreeCube(el.value)
      sampleTest.execute()
      expect(sampleTest.undo()).toBe(el.value)
    })
  })
})