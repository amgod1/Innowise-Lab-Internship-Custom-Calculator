import CalculateDegree from '../src/classes/OperationClass/CalculateDegree.js'

const executeTests = [
  {
    title: 'Postitive integer degree of the positive integer number',
    valueX: '3',
    valueY: '5',
    result: '243',
  },
  {
    title: 'Postitive integer degree of the positive float number',
    valueX: '3.2',
    valueY: '5',
    result: '335.54432',
  },
  {
    title: 'Negative integer degree of the positive integer number',
    valueX: '100',
    valueY: '-3',
    result: '0.000001',
  },
  {
    title: 'Negative integer degree of the positive float number',
    valueX: '1.5',
    valueY: '-2',
    result: '0.4444444444',
  },
  {
    title: 'Postitive integer degree of the negative integer number',
    valueX: '-3',
    valueY: '5',
    result: '-243',
  },
  {
    title: 'Postitive integer degree of the negative float number',
    valueX: '-3.2',
    valueY: '5',
    result: '-335.54432',
  },
  {
    title: 'Negative integer degree of the negative integer number',
    valueX: '-100',
    valueY: '-3',
    result: '-0.000001',
  },
  {
    title: 'Negative integer degree of the negative float number',
    valueX: '-1.5',
    valueY: '-2',
    result: '0.4444444444',
  },
]

const undoTests = [
  {
    title: 'Get back postitive integer degree of the positive integer number',
    valueX: '3',
    valueY: '5',
  },
  {
    title: 'Get back postitive integer degree of the positive float number',
    valueX: '3.2',
    valueY: '5',
  },
  {
    title: 'Get back negative integer degree of the positive integer number',
    valueX: '100',
    valueY: '-3',
  },
  {
    title: 'Get back negative integer degree of the positive float number',
    valueX: '1.5',
    valueY: '-2',
  },
  {
    title: 'Get back postitive integer degree of the negative integer number',
    valueX: '-3',
    valueY: '5',
  },
  {
    title: 'Get back postitive integer degree of the negative float number',
    valueX: '-3.2',
    valueY: '5',
  },
  {
    title: 'Get back negative integer degree of the negative integer number',
    valueX: '-100',
    valueY: '-3',
  },
  {
    title: 'Get back negative integer degree of the negative float number',
    valueX: '-1.5',
    valueY: '-2',
  },
]

describe('Testing CalculateDegree:', () => {
  executeTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new CalculateDegree(el.valueY)
      expect(sampleTest.execute(el.valueX)).toBe(el.result)
    })
  })

  undoTests.map((el) => {
    test(el.title, () => {
      const sampleTest = new CalculateDegree(el.valueY)
      sampleTest.execute(el.valueX)
      expect(sampleTest.undo()).toBe(el.valueX)
    })
  })
})
