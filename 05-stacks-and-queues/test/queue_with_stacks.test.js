'use strict';
const QueueWithStacks = require('../lib/queue_with_stacks');
describe('queue with stacks', () => {

  it('calling dequeue on a queue that is empty returns undefined', () => {
    let newQ = new QueueWithStacks();
    let actual = newQ.dequeue();
    expect(actual).toBeUndefined;
  });

  it('calling enqueue adds the correct number of items to the queue', () => {
    let newQ = new QueueWithStacks();
    newQ.enqueue(1);
    newQ.enqueue(2);
    newQ.enqueue(3);
    let actual = newQ.stack1.size;
    expect(actual).toEqual(3);
  });

  it('calling dequeue on a queue that  removes items', () => {
    let newQ = new QueueWithStacks();
    newQ.enqueue(1);
    newQ.enqueue(2);
    newQ.enqueue(3);
    console.log(newQ);
    let actual = newQ.dequeue();

    expect(actual).toEqual(1);
  });
});

