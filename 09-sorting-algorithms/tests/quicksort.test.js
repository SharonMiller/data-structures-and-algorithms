'use strict';

const quicksort = require('../lib/quicksort');

describe('Tests for quicksort', () => {
  test('should take an unsorted array and return a sorted array', () => {
    let testArr = [23, 42, 9, 15, 3];
    expect(quicksort(testArr)).toEqual([3, 9, 15, 23, 42]);

  });

  test('should throw error if no array passed in', () => {
    expect(quicksort).toThrowError(/ERROR/);

  });
  test('should take an unsorted array of strings and return them in alphebetical order', () => {
    let testArr = ['hello', 'friend', 'again'];
    let actual = quicksort(testArr);
    expect(actual).toEqual(['again', 'friend', 'hello']);
  });
});

