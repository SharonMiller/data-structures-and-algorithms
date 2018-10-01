'use strict';

const Node = require('./node.js');

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
      console.log(nodeToSwapWithRoot);
      let originalValue = node.value;
      node.value = nodeToSwapWithRoot.value;
      if (this.root.value === originalValue) {
        this.root = node;
      }
      console.log(node.value);

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


}

module.exports = BinarySearchTree;