'use strict';

const array_shift = require('../lib/array_shift');

test('should insert key into middle of an even array', () => {
  const test = [1, 3, 6, 7, 22, 33]
  let actual = insertShiftArray(test, 'middle');
  let expectedValue = [1, 3, 6, 'middle', 7, 22, 33];
  expect(actual).toEqual(expectedValue); 
});
