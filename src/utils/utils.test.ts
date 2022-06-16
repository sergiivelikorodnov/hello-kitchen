import { getHoursMinsTime, getRandomRating, truncateString } from './utils'

describe('Function: getHoursMinsTime', () => {
  const TIME = 75
  it('return 1hour 15 min', () => {
    expect(getHoursMinsTime(TIME)).toEqual('1h 15min')
  })
})

describe('Function: getRandomRating', () => {
  it('return random number from 1 to MAX_NUMBER', () => {
    expect(getRandomRating()).not.toBeGreaterThan(5)
  })
})

describe('Function: truncateString', () => {
  const STRING = 'Hello World'
  it('should return Hello...', () => {
    expect(truncateString(STRING, 5)).toEqual('Hello...')
  })
})
