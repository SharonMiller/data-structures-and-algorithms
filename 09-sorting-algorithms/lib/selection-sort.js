'use strict';
let selectionSort = (array, compare) => {
  compare = compare ? compare : (a, b) => a < b;
  let len = array.length;


  for (let wall = 0; wall < len; wall++) {
    let i = wall;
    for (let j = i + 1; j < len; j++) {
      if (!compare(array[i], array[j])) {
        i = j;
      }
    }
    if (i != wall) {
      [array[i], array[wall]] = [array[wall], array[i]];
    }
  }
  return array;
};

module.exports = selectionSort;