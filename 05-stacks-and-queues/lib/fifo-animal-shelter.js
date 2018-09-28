'use strict';
const Queue = require('./queue');

class AnimalShelter extends Queue {
  constructor() {
    super();
  }

  enqueue(animal) {
    if (animal !== 'dog' && animal !== 'cat') {
      throw new Error('animal shelter only accepts dogs or cats');
    }
    super.enqueue(animal); //extends queue methods
  }
  //dequeue animal passed in either cat or dog, if another animal is passed in return whichever is next in line.
  dequeue(pref) {
    let storage = this.storage;
    if (pref === 'cat' || pref === 'dog') {
      storage.current = storage.head;
      storage.next = storage.current.next;

      //see if the preferred animal is at the front of the queue
      if (storage.head.value === pref) {
        let returnedAnimal = storage.current;
        storage.head = storage.next;
        return returnedAnimal;
      }
      //traverse the list while current is not preference and next is not null
      while (storage.current.value !== pref && storage.next.value) {
        storage.previous = storage.current;
        storage.current = storage.next;
        storage.next = storage.current.next;
      }
      //if the current value is pref, but the next is not null
      if (storage.current.value === pref && storage.next !== null) {
        let returnedAnimal = storage.current;
        storage.previous.next = storage.current.next;
        storage.current.next = null;
        return returnedAnimal;
      }
      //if current value is preference, but next value is null
      else if (storage.current.value === pref && storage.next === null) {
        let returnedAnimal = storage.current;
        storage.previous.next = null;
        return returnedAnimal;
      } else { throw new Error(`Your animal choice is not available at this time`); }
    }
    //if a different animal requested- return next cat or dog. 
    return super.dequeue();
  }

}

module.exports = AnimalShelter;
