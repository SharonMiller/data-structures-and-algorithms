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
    // console.log(testList, 'i am testlist prepend');
    expect(testList.head.value).toEqual(6);
  });
  test('should prepend node  an empty list', () => {
    let emptyList = new LinkedList();
    // console.log(emptyList, 'i am empty prepend');
    emptyList.prepend(2);
    expect(emptyList.head.value).toEqual(2);
  });
});


describe('remove tests', () => {
  test('should delete node', () => {
    const testList = new LinkedList();
    testList.append(7);
    testList.append(12);
    testList.append(9);
    // console.log(testList);
    testList.remove(1);
    expect(testList.head.value).toEqual(7);
    expect(testList.head.next.value).toEqual(9);
  });
});

describe('reverse tests', () => {
  test('should reverse list order', () => {
    let reverseList = new LinkedList();
    reverseList.append(1);
    reverseList.append(2);
    reverseList.append(3);
    // console.log(reverseList);
    reverseList.reverse();
    expect(reverseList.head.value).toEqual(3);
  });
});

// describe('serialize tests', () => {
//   test('', () => {
//     let linkedList = new LinkedList();
//     linkedList.append(1);
//     let actual = linkedList.serialize();
//     expect(typeof actual).toBe('string');
//   });
// });
describe('insert before tests', () => {
  let linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  test('should insert 3 before 2', () => {
    linkedList.insertBefore(2, 3);
    expect(linkedList.head.next.value).toEqual(3);
  });
  //QUESTION: I cant figure out why this test wont pass???
  // test('shouldreturn null if current value passed in doesnt exist', () => {
  //   linkedList.insertBefore(5, 5);
  //   expect(linkedList.head.next.value).toBeNull;
  // });
});

