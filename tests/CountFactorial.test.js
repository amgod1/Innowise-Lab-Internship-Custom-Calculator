import CountFactorial from '../src/classes/OperationClass/CountFactorial.js'

const executeTests = [
  {
    title: 'Factorial of little number',
    value: '3',
    result: '6',
  },
  {
    title: 'Factorial of usual number',
    value: '13',
    result: '6227020800',
  },
  {
    title: 'Factorial of giant number',
    value: '171',
    result: 'Infinity',
  },
]

const undoTests = [
  {
    title: 'Get back factorial of little number',
    value: '3',
  },
  {
    title: 'Get back factorial of usual number',
    value: '13',
  },
  {
    title: 'Get back factorial of giant number',
    value: '171',
  },
]

describe('Testing CountFactorial:', () => {
  executeTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new CountFactorial(el.value)
      expect(sampleTest.execute()).toBe(el.result)
    })
  })

  undoTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new CountFactorial(el.value)
      sampleTest.execute()
      expect(sampleTest.undoUnique(true)).toBe(el.value)
    })
  })
})
