'use strict';

const BinarySearchTree = require('../../06-trees/lib/binary-search-tree');
const Node = require('../../06-trees/lib/node');
const treeIntersection = require('../lib/intersecting-tree');


describe(' tree intersection function', () => {

  test('should return all tree intersections', () => {

    let treeA = new BinarySearchTree(new Node(5));
    treeA.insert(new Node(10));

    let treeB = new BinarySearchTree(new Node(5));
    treeB.insert(new Node(4));

    let actual = treeIntersection(treeA, treeB);

    expect(actual).toEqual([5]);

  });

  test('should show that a tree without intersections returns empty array', () => {

    let treeA = new BinarySearchTree(new Node(5));
    treeA.insert(new Node(10));
    treeA.insert(new Node(20));
    treeA.insert(new Node(2));

    let treeB = new BinarySearchTree(new Node(9));
    treeB.insert(new Node(4));
    treeB.insert(new Node(3));
    treeB.insert(new Node(1));


    let actual = treeIntersection(treeA, treeB);

    expect(actual).toEqual([]);

  });

  test('should show passing in one tree throws error', () => {

    let treeA = new BinarySearchTree(new Node(1));
    expect(() => treeIntersection(treeA)).toThrow('Error: intersection requires two trees');

  });
});