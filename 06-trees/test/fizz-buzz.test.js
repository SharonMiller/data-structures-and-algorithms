'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');
const Node = require('../lib/node.js');
const fizzBuzzTree = require('../lib/fizz-buzz-tree.js');

describe('Fizz Buzz', () => {

  test('15 will be fizz', () => {
    let newTree = new BinarySearchTree();
    let seven = new Node(7);
    let twenty = new Node(20);
    let four = new Node(4);
    newTree.root = seven; 
    seven.right = twenty;
    seven.left = four;

    fizzBuzzTree(newTree);
    expect(newTree.root.right.value).toBe('buzz');
  });
  test('15 will be fizz', () => {
    let newTree = new BinarySearchTree();
    let seven = new Node(7);
    let twenty = new Node(20);
    let four = new Node(4);
    let five = new Node(5);
    let thirty = new Node(30);
    let three = new Node(3);
    newTree.root = seven; 
    seven.right = twenty;
    seven.left = four;
    four.right = five;
    twenty.right = thirty;
    four.left = three;

    fizzBuzzTree(newTree);
    expect(newTree.root.left.left.value).toBe('fizz');
    expect(newTree.root.left.right.value).toBe('buzz');
    expect(newTree.root.right.right.value).toBe('fizzbuzz');


  });

});