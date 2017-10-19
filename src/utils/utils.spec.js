import { getDiff } from './index'

describe('getDiff', () => {
  it('should return diffed data', () => {
    const a = {
      one: true,
      two: false,
      three: true
    }
    const b = {
      one: false,
      two: false,
      three: false
    }
    const diff = getDiff(a, b)
    expect(diff)
      .toEqual({
        one: false,
        three: false
      })
  })

  it('should pass keys that are new', () => {
    const a = {
      one: true
    }
    const b = {
      one: false,
      two: true
    }
    const diff = getDiff(a, b)
    expect(diff)
      .toEqual({
        one: false,
        two: true
      })
  })
})
