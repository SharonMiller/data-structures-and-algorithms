'use strict';

const Stack = require('../lib/stack');
const LinkedList = require('../../04-linked-lists/lib/linkedList');

describe('Stack tests on the class constructor', () => {
  it('should create and instance of Stack', () => {
    let stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
  });

  test('should create a list with the length of 0', () => {
    let stack = new Stack();
    let actual = stack.length;
    let expected = 0;
    expect(actual).toBe(expected);
  });
  test('should have storage', () => {
    let stack = new Stack();
    let actual = stack.storage;
    let expected = LinkedList;
    expect(actual).toBeInstanceOf(expected);
  });
});
describe('Stack push test', () => {
  it('push an item to linked list', () => {
    let stack = new Stack();
    stack.push(5);
    let actual = stack.storage.head.value;
    let expected = 5;
    expect(actual).toEqual(expected);
  });
  it('push increment list', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(4);
    let actual = stack.length;
    let expected = 2;
    expect(actual).toEqual(expected);
  });
  it('throw error if no values are pushed in', () => {
    let stack = new Stack();
    expect(() => {
      stack.push();
    }).toThrowError('push method requires a value');
  });
}); 
describe('Stack pop test', () => {
  it('should return the last value', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(6);
    let actual = stack.pop();
    let expected = 6;
    expect(actual).toBe(expected);
  });
});

