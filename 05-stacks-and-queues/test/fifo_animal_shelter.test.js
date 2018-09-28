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
    expect(() => {
      newShelter.enqueue('lion');
    }).toThrowError;
  });

  test('when enqueue is called with nothing returns error', () => {
    let newShelter = new AnimalShelter();
    expect(() => {
      newShelter.enqueue();
    }).toThrowError;
  });
});
describe('animal shelter dequeue', () => {

  test('when dequeue is called with nothing returns error', () => {
    let newShelter = new AnimalShelter();
    expect(() => {
      newShelter.dequeue();
    }).toThrowError;
  });

  test('when dequeue dog is called with animal in queue, dog is returned', () => {
    let newShelter = new AnimalShelter();
    newShelter.enqueue('cat');
    newShelter.enqueue('dog');
    let returnedAnimal = newShelter.dequeue('dog');
    expect(returnedAnimal.value).toBe('dog');
  });

  test('when dequeue cat is called with animals in queue, cat is returned', () => {
    let newShelter = new AnimalShelter();
    newShelter.enqueue('cat');
    newShelter.enqueue('dog');
    let returnedAnimal = newShelter.dequeue('cat');
    expect(returnedAnimal.value).toBe('cat');
  });

  test('when dequeue frog is called with animals in queue, next animal in line is returned', () => {
    let newShelter = new AnimalShelter();
    newShelter.enqueue('cat');
    newShelter.enqueue('dog');
    let returnedAnimal = newShelter.dequeue('cat');
    expect(returnedAnimal.value).toBe('cat');
  });
});