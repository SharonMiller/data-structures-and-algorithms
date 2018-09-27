'use strict';
const Queue = require('./queue');

class AnimalShelter extends Queue {
  constructor() {
    super();
  }

  enqueue(animal) {
    if (animal !== 'dog' || animal !== 'cat') {
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
    }

    //see if the preferred animal is at the front of the queue
    if (storage.head.value === pref) {
      let returnedAnimal = storage.current;
      storage.head = storage.next;
      return returnedAnimal;
    }
  }

}
module.exports = AnimalShelter;