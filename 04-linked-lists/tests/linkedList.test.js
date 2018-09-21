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

//test for nothing in remove
//test with one node with passed in 0
//test with one node passeds in greater than 0
//test with two passed in remove 0, remove 1, remove 2
//teast again with 3 in, remove 0,1,2,3

describe('remove tests', () => {

  test('should remove node in a list with only one node', () => {
    let testList = new LinkedList();
    testList.append(7);
    let myResult = testList.remove(0);
    expect(myResult.value).toEqual(7);
  });
  test('should remove tail when 3 or more nodes exist', () => {
    let testList = new LinkedList();
    testList.append(1);
    testList.append(2);
    testList.append(3);
    // testList.append(4);
    let myResult = testList.remove(1);
    expect(myResult.value).toEqual(2);
  });
  test('should remove head when offset is 0', () => {
    let testList = new LinkedList();
    testList.append(1);
    testList.append(2);
    let myResult = testList.remove(0);
    expect(myResult.value).toEqual(1);
  });
  test('should remove offset 1 when there is only 2 nodes', () => {
    let testList = new LinkedList();
    testList.append(1);
    testList.append(2);
    let myResult = testList.remove(1);
    expect(myResult.value).toEqual(2);
  });
});

//   test('should decrement length when node is deleted', () => {
//     let testList = new LinkedList();
//     testList.append(7);
//     testList.append(12);
//     testList.append(9);
//     testList.remove(0);
//     expect(testList.length).toEqual(2);
//   });
// });

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

describe('merge lists', () => {
  test('will take 2 lists and merge them returning the head value', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    list2.append(2);
    list2.append(4);
    let expected = LinkedList.mergeLists(list1, list2);
    expect(expected.value).toEqual(1);
  });
  test('will take two lists and will return the value of the second node', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    list2.append(2);
    list2.append(4);
    let expectedNode = LinkedList.mergeLists(list1, list2);
    expect(expectedNode.next.value).toEqual(2);
  });
  test('will merge two lists and return length of combined lists', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    list2.append(2);
    list2.append(4);
    let expectedNode = LinkedList.mergeLists(list1, list2);
    expect(expectedNode.next.value).toEqual(2);
  });
  test('will merge two lists of equal lengths and will return the value of head and the tail node of the new list', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    list2.append(2);
    list2.append(4);
    list2.append(6);
    //newlist should = 123456
    let expected = LinkedList.mergeLists(list1, list2);
    console.log(expected);
    expect(expected.value).toEqual(1);
    expect(expected.next.next.next.next.next.value).toEqual(6);
  });
  test('will merge two lists of equal lengths and will return the value of head and the tail node of the new list', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list2.append(2);
    list2.append(4);
    list2.append(5);
    //newlist should = 123456
    let expected = LinkedList.mergeLists(list1, list2);
    expect(expected.next.next.next.next.value).toEqual(5);
  });

  test('will merge a  list with 3 nodes and null for the second arg and return the head value of merged list', () => {
    let list1 = new LinkedList();
    list1.append(1);
    let expected = LinkedList.mergeLists(list1, null).value;
    expect(expected).toEqual(1);
  });
  test('will merge a  list with 3 nodes and null for the first arg and return the head value of merged list', () => {
    let list1 = new LinkedList();
    list1.append(1);
    let expected = LinkedList.mergeLists(null, list1).value;
    expect(expected).toEqual(1);
  });
  test('will merge a list with both args null return undefined', () => {
    let expected = LinkedList.mergeLists(null, null);
    expect(expected).toBeUndefined();
  });
  test('will merge a list with both args empty return undefined', () => {
    let expected = LinkedList.mergeLists();
    expect(expected).toBeUndefined();
  });
});