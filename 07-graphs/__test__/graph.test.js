'use strict';

const Graph = require('../lib/graph_traverse');

describe('tests for breadth first traversal', () => {
  test('creates instance of a graph', () => {
    let graph = new Graph();
    expect(graph).toBeInstanceOf(Graph);
  });
  test('creates instance of a graph with a new vertex', () => {
    let graph = new Graph();
    graph.addVertex('b', ['a', 'c', 'd']);

    expect(graph.vertices['b']).toEqual(['a', 'c', 'd']);
  });

  test('will have neighbors when value is added', () => {
    let graph = new Graph();
    graph.addVertex('c', ['a', 'b']);
    expect(graph.vertices['c']).toEqual(['a', 'b']);
  });
  test('will return an error if not passed a vertex', () => {
    let graph = new Graph();
    graph.addVertex('c', ['a', 'b']);
    let traverse = graph.breadthFirstTraversal;
    expect(() => traverse()).toThrowError();
  });
  test('will return return an array of visited vertices', () => {
    let graph = new Graph();
    graph.addVertex('a', ['c', 'b']);
    graph.addVertex('b', ['d', 'a']);
    graph.addVertex('c', ['a', 'd']);
    graph.addVertex('d', ['b', 'c']);

    expect(graph.breadthFirstTraversal('a')).toBeInstanceOf(Array);

  });
});

describe('depth first search testing', () => {

  test('will return an array', () => {
    let graph = new Graph();
    graph.addVertex('a', ['c', 'b']);
    graph.addVertex('b', ['a', 'c']);
    graph.addVertex('c', ['b', 'a']);


    let traversal = graph.depthFirstTraversal('b');
    expect(traversal).toBeInstanceOf(Array);

  });

  test('will return an array', () => {
    let graph = new Graph();
    graph.addVertex('a', ['b']);
    graph.addVertex('b', ['a']);

    let traversal = graph.depthFirstTraversal('b');
    expect(traversal).toBeInstanceOf(Array);

  });

  test('should throw an error when there is a missing vertex', () => {
    let graph = new Graph();
    graph.vertices = {
      'a': ['b', 'c', 'd'],
      'b': ['a'],
      'c': ['a', 'd'],
      'd': ['a', 'c'],
    };

    let traversal = graph.depthFirstTraversal('a');
    let expected = ['a', 'd', 'c', 'b'];

    expect(traversal).toEqual(expected);

  });
});