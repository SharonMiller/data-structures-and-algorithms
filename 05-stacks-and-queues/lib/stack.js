'use strict';

const LinkedList = require('../../04-linked-lists/lib/linkedList');

class Stack {
  constructor(){
    this.length = 0;
    this.storage = new LinkedList();
  }


  push(value) {
    if (!value) {
      throw new Error('push method requires a value');
    }
    this.storage.prepend(value);
    this.length++;
  }

  pop() {
    if (this.length) {
      let item = this.storage.remove(0).value;
      this.size--;
      return item;
    }
  }

}

module.exports = Stack;