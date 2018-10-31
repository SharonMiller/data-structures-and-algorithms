'use strict'

let quicksort = (array) => {
  if (!array) {
    throw new Error('ERROR: you must pass in an array');
  }
  if (array.length <= 1) {
    return array;
  } else {
    let pivot = array.pop();
    let left = [];
    let right = [];
    let newArray = [];
    let len = array.length;

    for (let i = 0; i < len; i++) {
      if (array[i] <= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    return newArray.concat(quicksort(left), pivot, quicksort(right));
  }
};


module.exports = quicksort;


