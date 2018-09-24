'use strict';

const LinkedList = require('../../04-linked-lists/lib/linkedList');

class Stack {
  constructor(serializedStack) {
    if (serializedStack) {
      this.storage = serializedStack.storage;
      this.size = serializedStack.storage.length;

    } else {
      this.size = 0;
      this.storage = new LinkedList();

    }
  }

  push(value) {
    if (!value) {
      throw new Error('push method requires a value');
    }
    this.storage.prepend(value);
    this.size++;
  }

  pop() {
    if (this.size) {
      let item = this.storage.remove(0).value;
      this.size--;
      return item;
    }
  }
  serialize() {
    return JSON.stringify(this);
  }

  static deserialize(string) {
    let stack = JSON.parse(string);
    stack.storage = new LinkedList(stack.storage);
    return new Stack(stack);
  }
}


module.exports = Stack;