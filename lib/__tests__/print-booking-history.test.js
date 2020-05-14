const {sum, subtract, multiply} = require('../print-booking-history')

test('adds 2 and 3 and returns 5', () => {
  const rv = sum(2,3)

  expect(rv).toBe(5)
})

test('subtracts 3 from 10 and returns 7', () => {
  const rv = subtract(10, 3)

  expect(rv).toBe(7)
})

test('multiplies two values', () => {
  const rv = multiply(2, 10)

  expect(rv).toBe(20)
})