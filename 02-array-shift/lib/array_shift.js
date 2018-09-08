'use strict';
// module.exports = exports = {};
module.exports = exports = {};

exports.insertShiftArray = (inputArr, item) => {
  const length = inputArr.length
  const middle = Math.ceil(inputArr.length/2 -1);
  let temp = inputArr[middle]; 
  inputArr[middle] = item;
  
  for (let i = middle; i <= length; i++){
    let tempTwo = inputArr[i];
    inputArr[i] = temp;
    temp = tempTwo;
  }
  return inputArr;
}
