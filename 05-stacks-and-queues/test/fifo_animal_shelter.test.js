'use strict';
const AnimalShelter = require('../lib/fifo-animal-shelter.js');

describe('animal shelter queue', () => {
  // queue tests

  test('enqueued animal it showsin shelter', () => {
    let newShelter = new AnimalShelter();
    newShelter.enqueue('dog');

    expect(newShelter.storage.head.value).toBe('dog');  
  });

  test('when enqueue of not a dog or cat returns error', () => {
    let newShelter = new AnimalShelter();
    expect( () => {
      newShelter.enqueue('lion');
    }).toThrowError;
  });

  test('when enqueue is called with nothing returns error', () => {
    let newShelter = new AnimalShelter();
    expect( () => {
      newShelter.enqueue();
    }).toThrowError;
  });


});