'use strict';

const Stack = require('./stack.js');

class QueueWithStacks {
  constructor() {
    this.size = 0;
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value) {
    if (!value) {
      throw new Error('enqueue requires a value');
    }
    this.stack1.push(value);
    this.size++;
  }
  dequeue() {
    if (this.stack2.size === 0) {
      if (this.stack1.size === 0) {
        return;
      } else {
        while (this.stack1.size > 0) {
          let item = this.stack1.pop();
          this.stack2.push(item);
        }
      }
      
    }
    let returnedItem = this.stack2.pop();
    this.size--;
    return returnedItem;
  }
}

module.exports = QueueWithStacks;
