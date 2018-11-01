'use strict';

const radixSort = require('../lib/radixsort');

describe('Tests for radix sort', () => {
  test('should take an unsorted array and return a sorted array', () => {
    let arrayTest = [1, 7, 3, 8, 9];
    expect((radixSort(arrayTest, 10))).toEqual([1, 3, 7, 8, 9]);

  });

  test('should an array of just one item and return the item without an error', () => {
    let arrayTest = [20];
    let actual = (radixSort(arrayTest, 10));
    expect(actual).toEqual([20]);

  });
  test('should take an unsorted array of strings and return them in alphebetical order', () => {
    let arrayTest = [20, 976, 25, 763, 1, 234, 8777, 7, 3, 782, 9, 8];
    let actual = (radixSort(arrayTest, 10));
    expect(actual).toEqual([1, 3, 7, 8, 9, 20, 25, 234, 763, 782, 976, 8777]);
  });
});


