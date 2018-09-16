'use strict';

const Node = require('./node');
// import Node from '.nd';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //append is 0(n)
  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) { //as long as there is a .next i++ is the same as next in ll
      currentNode = currentNode.next; //moves one space to the right
    }
    currentNode.next = node;
    this.length++;
    console.log(this);
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
        console.log(currentNode.next);
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
  /* QUESTION::: I tried this first after i whiteboarded it, is it close to being a solution?
   while (currentNode.next) {
  //   if (currentNode.next.value === value);
  //   console.log(value);
  //   currentNode.next = currentNode.next.next;
  //   this.length--;
  // } */

  //revers is 0(n)
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


  // // serialize is O(1)
  // serialize() {
  //   return JSON.stringify(this);
  // }

  //deserialize is O(n)
  // deserialize() {
  //   this.head = listItem.head;
  //   this.tail = listItem.tail;
  //   this.length = listItem.length;

  //   //QUESTION: i think i need to use static, why is it saying it is reserved. Static methods are used when we need a function bound to a class, but not to any object of that class. 
  //   // static 
  //   deserialize(listObject) {
  //   let newList = JSON.parse(listObject);
  //   return new LinkedList(newList);
  // }

  insertBefore(value, newVal) {
    if (value === 0) {
      this.prepend(newVal);

    } else {
      let curr = this.head;
      let prev = null;

      while (value !== curr.value) {
        prev = curr;
        curr = curr.next;
      }

      prev.next = new Node(newVal, curr);
    }

    this.length++;
  }

  insertAfter(value, newVal) {
    let curr = this.head;
    while (value !== curr.value) {
      curr.next;
    }
    curr.next = new Node(newVal, curr.next);
    this.length++;
  }
};



//add append, prepend, reverse, remove, serialize, deserialize 
//add comments about big O for each method. 
module.exports = LinkedList;