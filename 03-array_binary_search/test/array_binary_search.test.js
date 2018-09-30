'use strict';

const binary = require('../lib/array_binary_search');

describe('binary search tests', () => {
  test('should take an input', () => {
    let testArray = [1, 2, 3];
    let actual = binary.binarySearch(testArray, 2);
    let expectedValue = 1;
    expect(actual).toBe(expectedValue);
  });

  test('should take an input not in the array and returns -1', () => {
    let testArray = [1, 2, 3];
    let actual = binary.binarySearch(testArray, 5);
    let expectedValue = -1;
    expect(actual).toEqual(expectedValue);
  });

  test('should take an input  to search for in array and return index of that element', () => {
    let testArray = [1, 2, 3, 4, 5, 6];
    let actual = binary.binarySearch(testArray, 5);
    let expectedValue = 4;
    expect(actual).toEqual(expectedValue);
  });
});