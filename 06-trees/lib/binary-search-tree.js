'use strict';

const Node = require('./node.js');

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  insert(nodeToInsert) {
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      //if there is a root do the insert logic and insert
      this._insert(this.root, nodeToInsert);
    }
  }
  // _insert(root, nodeToInsert) {
  //   //1 - do I have to go left?
  //   if (nodeToInsert.value < root.value) {
  //     if(!root.left) {
  //       root.left = nodeToInsert;
  //     }else{
  //       this._insert(root.left, nodeToInsert);
  //     }
  //   } else if (!root.right) {
  //     //2 can I have to go right?
  //     root.right = nodeToInsert;
  //   } else { 
  //     //moving to the right branch
  //     this._insert(root.right, nodeToInsert);
  //   }
  // }

  /* helper functions */

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
}

module.exports = BinarySearchTree;