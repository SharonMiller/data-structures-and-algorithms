'use strict';


const BinarySearchTree = require('./binary-search-tree');
const Node = require('./node');

let fizzBuzzTree = (bst) => {

  let _walkRename = (node) => {
    if (node.left) { _walkRename(node.left); }
    if (node.value % 15 === 0) { node.value = 'fizzbuzz'; }
    else if (node.value % 3 === 0) { node.value = 'fizz'; }
    else if (node.value % 5 === 0) { node.value = 'buzz'; }
    if (node.right) { _walkRename(node.right); }
  };

  _walkRename(bst.root);
  return bst;
};

module.exports = fizzBuzzTree;