'use strict';

const LinkedList = require('../lib/linkedList');
const Node = require('../lib/node');

describe('linkedList.js', () => {
  test('constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });
  test('should append new node to end of list', () => {
    const testList = new LinkedList();
    testList.append(5);
    expect(testList.head.value).toEqual(5);
    testList.append(10);
    expect(testList.head.value).toEqual(5);
    expect(testList.head.next.value).toEqual(10);
  });
});

describe('prepend tests', () => {
  const testList = new LinkedList();
  testList.append(5);
  test('should prepend node to to list', () => {
    testList.prepend(6);
    expect(testList.head.value).toEqual(6);
  });
  test('should prepend node an empty list', () => {
    let emptyList = new LinkedList();
    emptyList.prepend(2);
    expect(emptyList.head.value).toEqual(2);
  });
});


describe('remove tests', () => {
  const testList = new LinkedList();
  testList.append(7);
  testList.append(12);
  testList.append(9);
  testList.remove(1);
  test('should delete node', () => {
    expect(testList.head.value).toEqual(7);
    expect(testList.head.next.value).toEqual(9);
  });
  test('should decrement length when node is deleted', () => {
    expect(testList.length).toEqual(2);
  });
});

describe('reverse tests', () => {
  test('should reverse list order', () => {
    let reverseList = new LinkedList();
    reverseList.append(1);
    reverseList.append(2);
    reverseList.append(3);
    reverseList.reverse();
    expect(reverseList.head.value).toEqual(3);
  });
});

describe('serialize tests', () => {
  test('should convert list to string', () => {
    let linkedList = new LinkedList();
    linkedList.append(1);
    let actual = linkedList.serialize();
    expect(typeof actual).toBe('string');
  });
});

describe('deserialize tests', () => {
  test('should deserialize list', () => {
    let linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    let jsonobject = linkedList.serialize();
    let deLinkedList = new LinkedList();
    deLinkedList = LinkedList.deserialize(jsonobject);
    expect(linkedList.head.value).toEqual(deLinkedList.head.value);
  });
});

describe('insert before tests', () => {
  let linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  test('should insert a node with the value of 20 before the node with the value of 2', () => {
    linkedList.insertBefore(2, 20);
    expect(linkedList.head.next.value).toEqual(20);
  });
  test('test should return one node equal to three', () => {
    let returnOneList = new LinkedList();
    returnOneList.insertBefore(0, 3);
    expect(returnOneList.head.value).toEqual(3);
  });
});

describe('insert after tests', () => {
  let insertLinkedList = new LinkedList();
  test('test should insert 25 after 1', () => {
    insertLinkedList.append(1);
    insertLinkedList.append(2);
    insertLinkedList.append(3);
    insertLinkedList.append(4);
    insertLinkedList.insertAfter(1, 25);
    expect(insertLinkedList.head.next.value).toEqual(25);
  });
  test('list length should increment', () => {
    let nextinsertLinkedList = new LinkedList();
    nextinsertLinkedList.append(1);
    nextinsertLinkedList.append(2);
    nextinsertLinkedList.insertAfter(1, 4);
    expect(nextinsertLinkedList.length).toEqual(3);
  });
});


describe('insert k from end', () => {
  let linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  test('retrieve the value of the node 1 from the end', () => {
    let expected1 = linkedList.kthFromEnd(1);
    let expected2 = linkedList.kthFromEnd(2);
    expect(expected1).toEqual(2);
    expect(expected2).toEqual(1);
  });
  test('it sends error if outside range', () => {
    expect(() => linkedList.kthFromEnd(5)).toThrow(Error('out of bounds'));
  });
});