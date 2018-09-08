'use strict';

const array_shift = require('../lib/array_shift');

describe('insertShiftArray tests', () => {
  test('should insert key into middle of an even array', () => {
    const test = [1, 3, 6, 7, 22, 33]
    let actual = array_shift.insertShiftArray(test, 'middle');
    let expectedValue = [1, 3, 6, 'middle', 7, 22, 33];
    expect(actual).toEqual(expectedValue);
  });

  test('should insert key into middle rounded up of an odd array', () => {
    const test = [1, 3, 6, 7, 22]
    let actual = array_shift.insertShiftArray(test, 'middle');
    let expectedValue = [1, 3, 6, 'middle', 7, 22];
    expect(actual).toEqual(expectedValue);
  });

  test('should add item to array', () => {
    let actual = array_shift.insertShiftArray([], 5);
    let expectedValue = [5];
    expect(actual).toEqual(expectedValue);
  });

});