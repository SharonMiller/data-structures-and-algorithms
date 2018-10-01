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

describe('BST find Tests', () => {

  test('if bst is empty, return null', () => {
    let bst = new BinarySearchTree();
    bst.find(7);
    expect(bst.root).toBeNull;
  });
  test('find will locate the correct node', () => {
    let bst = new BinarySearchTree();
    bst.insert(new Node(7)); //root
    bst.insert(new Node(9)); //root right
    bst.insert(new Node(19)); // root right right    
    bst.insert(new Node(4)); // root left 
    bst.insert(new Node(5)); // root left right
    bst.insert(new Node(18)); // root left right
    let found19 = bst.find(19);
    expect(found19.right).toBeNull;
    expect(found19.left.value).toBe(18);
  });
});
describe('BST remove Tests', () => {
  test('if no node value, return null', () => {
    let bst = new BinarySearchTree();
    bst.insert(new Node(7)); //root
    expect(bst.remove()).toBeNull;
  });
  test('if node has one child', () => {
    let bst = new BinarySearchTree();
    bst.insert(new Node(7)); //root
    bst.insert(new Node(9)); //root right
    bst.insert(new Node(19)); // root right right 
    bst.remove(19);
    expect(bst.root.right.right.value).toBeNull;
  });
  test('if bst is empty, return null', () => {
    let bst = new BinarySearchTree();
    expect(bst.remove(1)).toThrowError();
  });


});

// describe('BST max and min tests', () => {
//   test('if finds the max value', () => {
//     let bst = new BinarySearchTree();
//     bst.insert(new Node(7)); //root
//     bst.insert(new Node(9)); //root right
//     bst.insert(new Node(19)); // root right right    
//     bst.insert(new Node(4)); // root left 
//     bst.insert(new Node(5)); // root left right
//     bst.insert(new Node(18)); // root left right
//     let expected = bst.getMax(7);
//     console.log(expected);
//     expect(expected.root.value).toBe(19);
//   });

// });