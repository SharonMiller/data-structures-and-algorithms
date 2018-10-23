'use strict';


let repeatedWord = book => {
  let words = book.split(' ');
  let wordCounts = {};

  for (let i = 0; i < words.length; i++)
    if (wordCounts[words[i]]) {
      return words[i];
    } else {
      wordCounts[words[i]] = 1;
    }
};



export default repeatedWord();