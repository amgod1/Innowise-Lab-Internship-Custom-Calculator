import MathCbrt from '../src/classes/OperationClass/MathCbrt.js'

const executeTests = [
  {
    title: 'Cube root of positive integer number',
    value: '27',
    result: '3',
  },
  {
    title: 'Cube root of negative integer number',
    value: '-27',
    result: '-3',
  },
  {
    title: 'Cube root of positive float number',
    value: '1.331',
    result: '1.1',
  },
  {
    title: 'Cube root of negative float number',
    value: '-1.331',
    result: '-1.1',
  },
]

const undoTests = [
  {
    title: 'Get back after cube root of positive integer number',
    value: '27',
  },
  {
    title: 'Get back after cube root of negative integer number',
    value: '-27',
  },
  {
    title: 'Get back after cube root of positive float number',
    value: '1.331',
  },
  {
    title: 'Get back after cube root of negative float number',
    value: '-1.331',
  },
]

describe('Testing MathCbrt:', () => {
  executeTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new MathCbrt(el.value)
      expect(sampleTest.execute()).toBe(el.result)
    })
  })

  undoTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new MathCbrt(el.value)
      sampleTest.execute()
      expect(sampleTest.undo()).toBe(el.value)
    })
  })
})
