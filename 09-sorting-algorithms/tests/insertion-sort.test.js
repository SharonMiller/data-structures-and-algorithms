'use strict';

const insertionSort = require('../lib/insertion-sort');

describe('Tests for insertion sort', () => {
  test('should take an unsorted array and return a sorted array', () => {
    let testArr = [23, 42, 9, 15, 3];
    expect(insertionSort(testArr)).toEqual([3, 9, 15, 23, 42]);

  });

  test('should take an unsorted array return the search in reverse order based on second arg', () => {
    let testArr = [23, 42, 9, 15, 3];
    let newCompare = (a, b) => a > b;
    let actual = insertionSort(testArr, newCompare);
    expect(actual).toEqual([42, 23, 15, 9, 3]);

  });
  test('should take an unsorted array of strings and return them in alphebetical order', () => {
    let testArr = ['hello', 'friend', 'again'];
    let actual = insertionSort(testArr);
    expect(actual).toEqual(['again', 'friend', 'hello']);
  });
});

