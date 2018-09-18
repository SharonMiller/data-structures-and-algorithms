'use strict';

const Node = require('./node');
// import Node from '.nd';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.prev = null;
    this.currentNode = null;

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
    while (currentNode.next) { //as long as there is a .next i++ is the same as next in ll
      currentNode = currentNode.next; //moves one space to the right
    }
    currentNode.next = newNode;
    this.length++;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;
    // return this;
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
        // console.log(currentNode.next);
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
    // console.log(JSON.stringify(this));
    return JSON.stringify(this);
  }

  // deserialize is O(n)


  //QUESTION: i think i need to use static, why is it saying it is reserved. Static methods are used when we need a function bound to a class, but not to any object of that class. 
  static deserialize(listObject) {
    let oldList = JSON.parse(listObject);
    // console.log(oldList);
    let myNewList = new LinkedList();
    myNewList.head = oldList.head;// fix this - section
    myNewList.tail = oldList.tail;
    myNewList.length = oldList.length;
    myNewList.prev = oldList.prev;
    myNewList.currentNode = oldList.prev;
    console.log(myNewList);
    return myNewList;
  }

  insertBefore(value, newVal) {
    if (value === 0) {
      this.prepend(newVal);
      return;
    }
    this.currentNode = this.head;
    this.next = this.currentNode.next;

    while (value !== this.currentNode.value && this.currentNode.next !== null) {
      this.prev = this.currentNode;
      this.currentNode = this.next;
      console.log(this.currentNode);
      this.next = this.currentNode.next;
    }
    if (value !== this.currentNode.value) {
      return null;
    }
    let newNode = new Node(value);
    this.prev.next = newNode;
    this.length++;

  }

  insertAfter(value, newVal) {
    this.currentNode = this.head;
    while (value !== this.currentNode.value) {
      this.currentNode.next;
    }
    this.currentNode.next = new Node(newVal);
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





//add append, prepend, reverse, remove, serialize, deserialize 
//add comments about big O for each method. 
module.exports = LinkedList;