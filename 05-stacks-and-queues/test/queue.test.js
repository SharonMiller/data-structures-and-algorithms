'use strict';

const Queue = require('../lib/queue.js');
const LinkedList = require('../../04-linked-lists/lib/linkedList');

describe('queue class constructor', () => {
  let queue = new Queue();
  it('will create an instance of queue', () => {
    expect(queue).toBeInstanceOf(Queue);
  });

  it('should have storage as LinkedList', () => {
    let actual = queue.storage;
    expect(actual).toBeInstanceOf(LinkedList);
  });
  it('should begin with a size of 0', () => {
    let actual = queue.size;
    let expected = 0;
    expect(actual).toBe(expected);
  });
});

describe('enqueue tests', () => {
  it('should throw an error if no value is provided', () => {
    let queue = new Queue();
    expect(() => {
      queue.enqueue();
    }).toThrowError('');
  });

  it('should add items to the queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);

    let actual = queue.storage.head.next.value;
    let expected = 2;
    expect(actual).toBe(expected);
  });
});

describe('dequeue tests', () => {
  it('should return undefined when nothing in queue', () => {
    let queue = new Queue();
    expect(queue.dequeue()).toBeUndefined();
  });

  it('should return the value in the front of the queue', () => {
    let queue = new Queue();
    queue.enqueue(5);
    let actual = queue.dequeue();
    let expected = 5;
    expect(actual).toBe(expected);
  });

  it('should remove items from the back of the queue', () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(6);
    let actual = queue.dequeue();
    let expected = 5;
    expect(actual).toBe(expected);
  });

  it('should decrement queue size', () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(6);
    queue.dequeue();
    let actual = queue.size;
    let expected = 1;
    expect(actual).toBe(expected);
  });
});


describe('Queue serialize', () => {
  it('should return a string', () => {
    let queue = new Queue();
    let actual = queue.serialize();
    expect(typeof actual).toBe('string');
  });
});

describe('Queue deserialize', () => {
  it('should keep storage as a LinkedList', () => {
    let stringQ = new Queue();
    stringQ = stringQ.serialize();
    let queue = Queue.deserialize(stringQ);
    expect(queue.storage).toBeInstanceOf(LinkedList);
  });

  
});


