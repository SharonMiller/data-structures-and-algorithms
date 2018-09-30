'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

describe('BST Tests', () => {
  test('if bst is empty, create new node', () => {
    let bst = new BinarySearchTree();
    bst.insert(7);
    expect(bst.root).toBe(7);
  });
});