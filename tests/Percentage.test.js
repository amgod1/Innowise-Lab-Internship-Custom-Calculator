import Percentage from "../src/classes/OperationClass/Percentage.js"

const executeTests = [
  {
    title: 'Persent of positive integer number',
    value: '200',
    percent: '50',
    result:  '100',
  },
  {
    title: 'Persent of positive float number',
    value: '50.5',
    percent: '10',
    result: '5.05',
  },
  {
    title: 'Persent of negative integer number',
    value: '-200',
    percent: '50',
    result: '-100',
  },
  {
    title: 'Persent of negative float number',
    value: '-50.5',
    percent: '10',
    result: '-5.05',
  },
]

const undoTests = [
  {
    title: 'Get back persent of positive integer number',
    value: '200',
    percent: '50',
  },
  {
    title: 'Get back persent of positive float number',
    value: '50.5',
    percent: '10',
  },
  {
    title: 'Get back persent of negative integer number',
    value: '-200',
    percent: '50',
  },
  {
    title: 'Get back persent of negative float number',
    value: '-50.5',
    percent: '10',
  },
]

describe('Testing Percentage:', () => {
  executeTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new Percentage(el.value)
      expect(sampleTest.execute(el.percent)).toBe(el.result)
    })
  })

  undoTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new Percentage(el.value)
      sampleTest.execute(el.percent)
      expect(sampleTest.undo()).toBe(el.percent)
    })
  })
})