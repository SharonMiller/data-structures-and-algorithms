'use strict';

const Stack = require('../lib/stack');
const LinkedList = require('../../04-linked-lists/lib/linkedList');

describe('Stack constructor', () => {

  it('should create an instance of Stack', () => {
    let stack = new Stack();

    expect(stack).toBeInstanceOf(Stack);
  });

  test('should create a list with the size of 0', () => {
    let stack = new Stack();
    let actual = stack.size;
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

describe('Stack push', () => {

  it('push an item to linked list', () => {
    let stack = new Stack();
    stack.push(5);
    let actual = stack.storage.head.value;
    let expected = 5;

    expect(actual).toBe(expected);
  });

  it('push increment list', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(4);
    let actual = stack.size;
    let expected = 2;

    expect(actual).toBe(expected);
  });

  it('throw error if no values are pushed in', () => {
    let stack = new Stack();
    expect(() => {
      stack.push();
    }).toThrowError('push method requires a value');
  });
});

describe('Stack pop', () => {

  it('should return the last value', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(6);
    let actual = stack.pop();
    let expected = 6;

    expect(actual).toBe(expected);
  });

  it('should decrement length', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(6);
    stack.pop();
    let actual = stack.size;
    let expected = 1;

    expect(actual).toBe(expected);
  });
  it('return undefined when pop is called on empty stack', () => {
    let stack = new Stack();
    let actual = stack.pop();

    expect(actual).toBeUndefined();
  });
});

describe('Serialize', () => {

  it('should return a string', () => {
    let stack = new Stack();
    let actual = stack.serialize();

    expect(typeof actual).toBe('string');
  });
});

describe('deserialize', () => {
  it('should keep its methods', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    let stackString = stack.serialize();


    stack = Stack.deserialize(stackString);
    let actual = stack.pop();
    expect(actual).toBe(2);
  });
});

describe('Stack peek', () => {

  it('should return the last value', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(6);
    let actual = stack.peek();
    let expected = 6;

    expect(actual).toBe(expected);
  });
});
