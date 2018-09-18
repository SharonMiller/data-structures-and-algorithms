'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.prev = null;
    this.currentNode = null;
    this.length = 0;

  }

  //append is 0(1)
  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) { 
      currentNode = currentNode.next; 
    }
    currentNode.next = newNode;
    this.length++;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }
  //remove is O(n)
  remove(offset) {
    if (offset === this.length && 0) {
      let node = this.head;
      this.head = null;
      this.length--;
      return node;
    } else if (this.length) {
      let currentNode = this.head;
      for (let i = 0; i < offset - 1; i++) {
        currentNode = currentNode.next;
      }

      let node = currentNode.next;
      currentNode.next = node.next;
      node.next = null;
      this.length--;
      return node;
    } else {
      throw new Error('could not find a node to remove');
    }
  }

  //reverse is 0(n)
  reverse() {
    let currentNode = this.head;
    let prev = null;
    let next = currentNode.next;

    while (next) {
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
      next = currentNode.next;
    }
    currentNode.next = prev;
    this.head = currentNode;
  }


  // serialize is O(1)
  serialize() {
    return JSON.stringify(this);
  }

  // deserialize is O(n)
  static deserialize(listObject) {
    let oldList = JSON.parse(listObject);
    let myNewList = new LinkedList();
    myNewList.head = oldList.head;
    myNewList.length = oldList.length;
    myNewList.prev = oldList.prev;
    myNewList.currentNode = oldList.prev;
    return myNewList;
  }

  insertBefore(value, newVal) {
    if (this.head === null) {
      this.prepend(newVal);

    } else {
      let currentNode = this.head;
      let prev = null;

      while (value !== currentNode.value) {
        prev = currentNode;
        currentNode = currentNode.next;
      }
      let newNode = new Node(newVal);
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
    }

  }

  insertAfter(value, newVal) {
    let currentNode = this.head;
    while (value !== currentNode.value) {
      currentNode = currentNode.next;
    }
    let newNode = new Node(newVal);
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    this.length++;
  }
  kthFromEnd(k) {
    if (k > this.length - 1) {
      throw new Error('out of bounds');
    }

    this.currentNode = this.head;
    for (let i = 0; i < this.length - (k + 1); i++) {
      this.currentNode = this.currentNode.next;
    }
    return this.currentNode.value;
  }
}


module.exports = LinkedList;