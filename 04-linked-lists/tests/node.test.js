'use strict';

const Node = require('../lib/node');

describe('node.js', () => {
  test('constructor', () => {
    const node = new Node ('I am a new Node');
    expect(node.value).toEqual('I am a new Node');
    expect(node.next).toEqual(null);
  });
});