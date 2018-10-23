'use strict';


const repeatedWord = (book) => {
  if (typeof book !== 'string') { throw new Error('Error: function requires a string'); }
  let words = book.split(' ');
  let wordCounts = {};

  for (let i = 0; i < words.length; i++) {
    if (wordCounts[words[i]]) {
      return words[i];
    } else {
      wordCounts[words[i]] = 1;
    }
  }
  return ('There were not any repeated words');
};



module.exports = repeatedWord;