import PositiveNegative from '../src/classes/OperationClass/PositiveNegative.js'

const executeTests = [
  {
    title: 'Change sign of positive integer number',
    value: '4',
    result: '-4',
  },
  {
    title: 'Change sign of positive float number',
    value: '0.375',
    result: '-0.375',
  },
  {
    title: 'Change sign of negative integer number',
    value: '-7',
    result: '7',
  },
  {
    title: 'Change sign of negative float number',
    value: '-12.45',
    result: '12.45',
  },
  {
    title: 'Change sign of positive bigint number',
    value: '112233445566778899',
    result: '-112233445566778899',
  },
  {
    title: 'Change sign of negative bigint number',
    value: '-112233445566778899',
    result: '112233445566778899',
  },
]

const undoTests = [
  {
    title: 'Changing sign back of positive integer number',
    value: '4',
  },
  {
    title: 'Changing sign back of positive float number',
    value: '0.375',
  },
  {
    title: 'Changing sign back of negative integer number',
    value: '-7',
  },
  {
    title: 'Changing sign back of negative float number',
    value: '-12.45',
  },
  {
    title: 'Changing sign back of positive bigint number',
    value: '112233445566778899',
  },
  {
    title: 'Changing sign back of negative bigint number',
    value: '-112233445566778899',
  },
]

describe('Testing PositiveNegative:', () => {
  executeTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new PositiveNegative(el.value)
      expect(sampleTest.execute()).toBe(el.result)
    })
  })

  undoTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new PositiveNegative(el.value)
      expect(sampleTest.undo(sampleTest.execute())).toBe(el.value)
    })
  })
})
