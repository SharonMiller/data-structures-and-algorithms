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
  test('if node has a left and right child', () => {
    let bst = new BinarySearchTree();
    let seven = new Node(7);
    let five = new Node(5);
    let nineteen = new Node(19);
    bst.insert(seven); //root
    bst.insert(five); //root right
    bst.insert(nineteen); // root right right 
    bst.remove(seven);

    expect(bst.root.value).toBe(19);
  });
  // test('if node with a paretn has a left and right tree', () => {
  //   let bst = new BinarySearchTree();
  //   let seven = new Node(7);
  //   let nine = new Node(9);
  //   let nineteen = new Node(19);
  //   bst.insert(seven); //root
  //   bst.insert(nine); //root right
  //   bst.insert(nineteen); // root right right 
  //   console.log(seven);
  //   bst.remove(nine);

  //   expect(bst.root.value.right).toBe(19);
  // });
  
  // test('if bst is empty, return error', () => {
  //   let bst = new BinarySearchTree();
  //   expect(bst.remove()).toThrowError('tree is empty');
  // });


});

describe('BST max and min tests', () => {
  test('if finds the max value', () => {
    let bst = new BinarySearchTree();
    bst.insert(new Node(7)); //root
    bst.insert(new Node(9)); //root right
    bst.insert(new Node(19)); // root right right    
    bst.insert(new Node(4)); // root left 
    bst.insert(new Node(5)); // root left right
    bst.insert(new Node(18)); // root left right
    let expected = bst.getMaxNode();
    expect(expected.value).toBe(19);
  });

});

describe('Serialize and Deserialize tests', () => {
  test('covert array to buffer and see result should be buffer', () => {
    let bst = new BinarySearchTree();
    bst.insert(new Node(7)); //root
    bst.insert(new Node(9)); //root right
    bst.insert(new Node(6)); // root right right  
    expect(bst.serialize()).toBeInstanceOf(Buffer);
  });

  test('convert buffer to tree  and result should be a tree', () => {
    let bst = new BinarySearchTree();
    bst.insert(new Node(7)); //root
    bst.insert(new Node(9)); //root right
    bst.insert(new Node(6)); // root right right  
    let serial = bst.serialize(); 
    let deserTree = bst.deserialize(serial);
    expect(deserTree.root.right.value).toBe(9);
  });

});
describe('Breadth First Search', () => {

  test('will search left to right', () => {
    let newTree = new BinarySearchTree();
    let seven = new Node(7);
    let twenty = new Node(20);
    let four = new Node(4);
    newTree.root = seven; 
    seven.right = twenty;
    seven.left = four;
    let expected = [7, 4, 20];
    let results = newTree.breadthFirst();
    expect(results).toEqual(expected);
  });

});

describe('find Max Value in a binary tree', () => {

  test('will find the maximum value in a binary search tree', () => {
    let newTree = new BinarySearchTree();
    let seven = new Node(7);
    let twenty = new Node(20);
    let four = new Node(4);
    let five = new Node(5);
    let twelve = new Node(12);
    let thirty = new Node(30);
    newTree.root = seven; 
    seven.right = twenty;
    seven.left = four;
    four.left = five;
    four.right = twelve;
    twelve.right = thirty;
    let expected = 30;
    let results = BinarySearchTree.getMaxValue(newTree);
    expect(results).toEqual(expected);
  });

});


//serialize test - take an array convert it to a buffer see if t