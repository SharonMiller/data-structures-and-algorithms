'use strict';
/*arr - ordered list to search from
target - number to search for
return index of element or -1 if element not found */

module.exports = exports = {};
exports.binarySearch = (arr, target) => {
  let end = arr.length - 1;
  let beg = 0;

  while (beg <= end) {
    let mid = Math.floor((beg + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      beg = mid + 1;
    }
  }
  return -1;
};