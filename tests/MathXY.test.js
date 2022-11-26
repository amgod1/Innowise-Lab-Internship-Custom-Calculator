import MathXY from '../src/classes/OperationClass/MathXY.js'

const executeTests = [
  {
    title: 'Positive integer root of integer number',
    valueX: '81',
    valueY: '4',
    result: '3',
  },
  {
    title: 'Negative integer root of integer number',
    valueX: '-512',
    valueY: '3',
    result: '-8',
  },
  {
    title: 'Positive integer root of float number',
    valueX: '244.140625',
    valueY: '6',
    result: '2.5',
  },
  {
    title: 'Negative integer root of float number',
    valueX: '-2.197',
    valueY: '3',
    result: '-1.3',
  },
]

const undoTests = [
  {
    title: 'Get back afret positive integer root of integer number',
    valueX: '81',
    valueY: '4',
  },
  {
    title: 'Get back afret negative integer root of integer number',
    valueX: '-512',
    valueY: '3',
  },
  {
    title: 'Get back afret positive integer root of float number',
    valueX: '244.140625',
    valueY: '6',
  },
  {
    title: 'Get back afret negative integer root of float number',
    valueX: '-2.197',
    valueY: '3',
  },
]

describe('Testing MathXY:', () => {
  executeTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new MathXY(el.valueY)
      expect(sampleTest.execute(el.valueX)).toBe(el.result)
    })
  })

  undoTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new MathXY(el.valueY)
      sampleTest.execute(el.valueX)
      expect(sampleTest.undo()).toBe(el.valueX)
    })
  })
})
