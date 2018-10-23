'use strict';

const repeatedWord = require('../lib/reapeatedWord');


// let repeatedWord = book => {
//   let words = book.split(' ');
//   let wordCounts = {};

//   for (let i = 0; i < words.length; i++)
//     if (wordCounts[words[i]]) {
//       return words[i];
//     } else {
//       wordCounts[words[i]] = 1;
//     }
// };
describe('tests for repeatedWords', () => {
  test('should take a string and return a string', () => {
    let book = 'once apon a time there was a princess';
    let actual = repeatedWord(book);
    expect(actual).toBe('a');
  });
  test('should return message if no matching words', () => {
    let book = '';
    let actual = repeatedWord(book);
    expect(actual).toBe('There were not any repeated words');
  });

  test('should throw an error if input is an object', () => {
    let book = {};
    expect(() => { repeatedWord(book) }).toThrow('Error: function requires a string');
  });
});