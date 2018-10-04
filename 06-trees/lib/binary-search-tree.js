'use strict';

const Node = require('./node.js');
const Queue = require('../../05-stacks-and-queues/lib/queue.js');

class BinarySearchTree {
  constructor(root) {
    this.root = root;
  }
  //INSERT METHOD
  insert(node) {
    if (!this.root) {
      this.root = (node);
    } else {
      this._insert(this.root, node);
    }
  }
  _insert(rootNode, nodeToInsert) {
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      rootNode.right = nodeToInsert;
    } else {
      this._insert(rootNode.right, nodeToInsert);
    }
  }
  //will need to add a tracker for parent 

  //REMOVE METHOD
  remove(node) {
    if (!this.root) {
      throw Error('tree is empty');
    }
    if (!node) {
      return null;
    } else {
      this._remove(node);
    }
  }
  _remove(node) {
    let result = node;
    //if replacing the first root node- use getmin or getmax
    let nodeToSwapWithRoot;
    if (!node.right) { //no right side root
      node = node.left;
    } else if (!node.left) { //no left side of root
      node = node.right;
    } else if (node.right) {
      nodeToSwapWithRoot = this.getMinNode(node.right);

      //swap node with nodeToSwapWithRoot
      let originalValue = node.value;
      if (this.root.value === originalValue) {
        this.root = node;
      }
      node.value = nodeToSwapWithRoot.value;


      //delete nodeToSwapWithRoot
      if (nodeToSwapWithRoot.right) {
        nodeToSwapWithRoot = nodeToSwapWithRoot.right;
      } else {
        nodeToSwapWithRoot = null;
      }
      //deletes the node by pointing the current to null but same as partent.left = null. 
    } else {
      this.root = null;
    }



    return result;
  }


  //FIND METHOD
  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }
  _find(rootNode, value) {
    if (!rootNode) {
      return null;
    } else if (rootNode.value === value) {
      return rootNode;
    } else if (rootNode.value < value) {
      return this._find(rootNode.right, value);
    }
    return this._find(rootNode.left, value);

  }

  //SERIALIZE
  serialize() {
    //tree - array
    let array = this.preOrder();

    //array - buffer
    let buffer = Buffer.from(array);
    // return buffer
    return buffer;
  }

  deserialize(buffer) {
    //buffer to array
    let array = Array.from(buffer);
    //array to tree
    array.forEach(val => {
      let node = new Node(val);
      this.insert(node);
    });
    return this;
  }
  /* tree traversels*/

  //root left right
  preOrder() {
    let results = [];

    let _walk = node => {
      results.push(node.value); //root
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  // left right root
  postOrder() {
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);

    return results;
  }

  //left root right returns values in order
  inOrder() {
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  getMinNode(node) {
    if (!node) {
      node = this.root;
    }
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  getMaxNode(node) {
    if (!node) {
      node = this.root;
    }
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  breadthFirst() {
    let results = [];
    let newQueue = new Queue();

    newQueue.enqueue(this.root);
    let deQ = newQueue.dequeue();

    console.log(deQ.value);
    results.push(deQ.value);
    if (deQ.left) { newQueue.enqueue(deQ.left); }
    if (deQ.right) { newQueue.enqueue(deQ.right); }
    while (newQueue.size) {
      deQ = newQueue.dequeue();
      results.push(deQ.value);
      if (deQ.left) { newQueue.enqueue(deQ.left); }
      if (deQ.right) { newQueue.enqueue(deQ.right); }
    }

    return results;
  }
  static getMaxValue(tree) {
    let maxVal = tree.root.value;

    let _walk = (node) => {
      if (node.value > maxVal) {
        maxVal = node.value;
      }
      if (node.left) {
        _walk(node.left);
      }
      if (node.right) {
        _walk(node.right);
      }
    };
    _walk(tree.root);
    return maxVal;
  }
}

module.exports = BinarySearchTree;