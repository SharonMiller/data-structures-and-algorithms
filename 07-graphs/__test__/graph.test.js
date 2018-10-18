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
