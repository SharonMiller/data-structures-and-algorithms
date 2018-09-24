'use strict';

const LinkedList = require('../../04-linked-lists/lib/linkedList');

class Queue {
  constructor(serQueue) {
    if (serQueue) {
      this.size = serQueue.size;
      this.storage = serQueue.storage;

    } else {
      this.size = 0;
      this.storage = new LinkedList();
    }
  }


  enqueue(value) {
    if (!value) {
      throw new Error('value required');
    }
    this.storage.append(value);
    this.size++;
  }

  dequeue() {
    if (this.size) {
      let frontValue = this.storage.remove(0).value;
      this.size--;
      return frontValue;
    }
  }
  serialize() {
    return JSON.stringify(this);
  }

  static deserialize(string) {
    let queue = JSON.parse(string);
    queue.storage = new LinkedList(queue.storage);
    return new Queue(queue);
  }
}
module.exports = Queue;