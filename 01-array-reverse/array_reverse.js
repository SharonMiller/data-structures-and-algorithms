'use strict';

module.exports = exports = {};

exports.reverseArray = (inputArray) => {
  let j = 0;
  let reversedArray = [];
  for (let i = (inputArray.length - 1); i >= 0; i--) {
    reversedArray[j] = inputArray[i];
    j++;
  }
  return reversedArray;
};
