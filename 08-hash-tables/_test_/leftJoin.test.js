'use strict';

const leftJoin = require('../lib/leftJoin');



describe('tests for leftJoin function', () => {

  test('should take two hashmaps with and return the correct key value pairs including a null', () => {
    let synHash = {
      fond: 'enamoured',
      wrath: 'angered',
      outfit: 'garb',
    };
    let antHash = {
      fond: 'anger',
      wrath: 'happy',
      outfit: '',
    };
    let actual = leftJoin(synHash, antHash);

    expect(actual).toHaveProperty('outfit', ['garb', null]);
    expect(actual).toHaveProperty('fond', ['enamoured', 'anger']);

  });

  test('should return the original array with nulls wo matching values passed an empty object', () => {
    let synHash = {
      fond: 'enamoured',
      wrath: 'angered',
      outfit: 'garb',
    };
    let antHash = {

    };
    let actual = leftJoin(synHash, antHash);

    expect(actual).toHaveProperty('outfit', ['garb', null]);
    expect(actual).toHaveProperty('fond', ['enamoured', null]);
    expect(actual).toHaveProperty('wrath', ['angered', null]);

  });
  test('should throw error when passed only one hashmap', () => {
    let synHash = {
      fond: 'enamoured',
      wrath: 'angered',
      outfit: 'garb',
    };
    expect(() => leftJoin(synHash)).toThrowError();


  });

});