'use strict';

const multiBracketValidation = require('../lib/multi-bracket-validation.js');

describe('Bracket Validation', () => {

  it('empty string should return true', () => {
    let actual = multiBracketValidation('');
    expect(actual).toEqual(true);
  });

  it('matching brackets to return true', () => {
    let actual = multiBracketValidation('[]');
    expect(actual).toBe(true);
  });

  it('none matching brackets return false', () => {
    let actual = multiBracketValidation('[{]');
    expect(actual).toBe(false);
  });

  it('matching brackets to return properly when string has other characters', () => {
    let actual = multiBracketValidation('mystring[]is{[]}');
    expect(actual).toBe(true);
  });
});

