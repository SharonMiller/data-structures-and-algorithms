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
    console.log(testList, 'i am testlist prepend');
    expect(testList.head.value).toEqual(6);
  });
  test('should prepend node  an empty list', () => {
    let emptyList = new LinkedList();
    console.log(emptyList, 'i am empty prepend');
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
    console.log(testList);
    testList.remove(1);
    expect(testList.head.value).toEqual(7);
    expect(testList.head.next.value).toEqual(9);
  });
});