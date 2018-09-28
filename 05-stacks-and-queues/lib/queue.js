'use strict';

const LinkedList = require('../../04-linked-lists/lib/linkedList');

class Queue {
  constructor(serializedQueue) {
    if (serializedQueue) {
      this.size = serializedQueue.size;
      this.storage = serializedQueue.storage;

    } else {
      this.storage = new LinkedList();
      this.size = this.storage.length;
    }
  }


  enqueue(value) {
    if (!value) {
      throw new Error('value required');
    }
    this.storage.append(value);
    this.size = this.storage.length;
  }

  dequeue() {
    if (this.size) {
      let frontValue = this.storage.remove(0);
      this.size = this.storage.length;
      return frontValue.value;
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