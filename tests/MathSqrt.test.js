import MathSqrt from '../src/classes/OperationClass/MathSqrt.js'

const executeTests = [
  {
    title: 'Square root of integer number',
    value: '9',
    result: '3',
  },
  {
    title: 'Square root of float number',
    value: '82.81',
    result: '9.1',
  },
]

const undoTests = [
  {
    title: 'Get back after square root of integer number',
    value: '9',
  },
  {
    title: 'Get back after square root of float number',
    value: '82.81',
  },
]

describe('Testing MathSqrt:', () => {
  executeTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new MathSqrt(el.value)
      expect(sampleTest.execute()).toBe(el.result)
    })
  })

  undoTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new MathSqrt(el.value)
      sampleTest.execute()
      expect(sampleTest.undo()).toBe(el.value)
    })
  })
})
