'use strict';
module.exports = exports = {};
const test = [1, 3, 6, 7, 22]
exports.insertShiftArray = (inputArr, item) => {
  const length = inputArr.length
  const middle = Math.floor(inputArr.length/2 -1);
  console.log(middle); //middle = 1
  let temp = inputArr[middle]; 
  console.log (temp); //temp = 3
  inputArr[middle] = item;//insert the item MIDDLE
  console.log(inputArr[middle]);
  
  for (let i = middle; i < length; i++){
    let tempTwo = inputArr[i];
    inputArr[i] = temp;
    temp = tempTwo;
  }
  return inputArr;
}

console.log(exports.insertShiftArray(test, 'MIDDLE'));