describe('ngRangeFilter', function () {
  beforeEach(module('ngRangeFilter'))

  it('returns null when passed no parameters', inject(function (rangeFilter) {
    expect(rangeFilter()).toBe(null)
  }))

  it('returns an array containing values from 0 to (n - 1)', inject(function (rangeFilter) {
    expect(rangeFilter([5])).toEqual([0, 1, 2, 3, 4])
  }))

  it('returns an array containing values from a to b', inject(function (rangeFilter) {
    expect(rangeFilter([1, 5])).toEqual([1, 2, 3, 4, 5])
  }))

  it('returns an array containing values from a to b', inject(function (rangeFilter) {
    expect(rangeFilter([5, 1])).toEqual([5, 4, 3, 2, 1])
  }))
})
