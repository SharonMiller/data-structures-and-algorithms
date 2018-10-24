'use strict';


const leftJoin = (syn, ant) => {
  const result = {};
  for (let key in syn) {
    result[key] = [syn[key]];
    if (ant[key]) {
      result[key].push(ant[key]);
    } else {
      result[key].push(null);
    }
  }
  return result;
};

module.exports = leftJoin;