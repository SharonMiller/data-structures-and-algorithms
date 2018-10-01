'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');
const Node = require('../lib/node.js');

describe('BST input Tests', () => {
  test('if bst is empty, create new node', () => {
    let bst = new BinarySearchTree();
    bst.insert(7);
    expect(bst.root).toBe(7);
  });

  test('if adding a second node that is larger it will go to the right', () => {
    let bst = new BinarySearchTree();
    bst.insert(new Node(7));
    bst.insert(new Node(9));
    expect(bst.root.right.value).toBe(9);
  });
  
  test('nodes will insert in the proper place larger values right, lesser values left', () => {
    let bst = new BinarySearchTree();
    bst.insert(new Node(7)); //root
    bst.insert(new Node(9)); //root right
    bst.insert(new Node(19)); // root right right    
    bst.insert(new Node(4)); // root left 
    bst.insert(new Node(5)); // root left right
    expect(bst.root.left.value).toBe(4);
    expect(bst.root.right.right.value).toBe(19);
    expect(bst.root.left.right.value).toBe(5);
  });
});