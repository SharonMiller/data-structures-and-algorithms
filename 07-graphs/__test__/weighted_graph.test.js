'use strict';
let WeightedGraph = require('../lib/get-edge');

describe('get edge tests', () => {
  test('should create an empty weighted graph', () => {
    let weightedGraph = new WeightedGraph;

    expect(weightedGraph).toBeInstanceOf(Object);
  });

  test('should set the value of the vertex to be an empty array', () => {
    let graph = new WeightedGraph();

    graph.addVertex('a');

    let actual = graph.adjList.get('a');
    let expected = new Map();

    expect(actual).toEqual(expected);
  });

  test('should add a weighted edge to the src and dest vertexes in the adjacency list', () => {
    let graph = new WeightedGraph();

    graph.adjList.set('a', new Map());
    graph.adjList.set('b', new Map());

    graph.addEdge('a', 'b', 1);

    graph.printAdjList();
    let actual = graph.adjList.get('a').get('b');

    expect(actual).toBe(1);

    actual = graph.adjList.get('b').get('a');
    expect(actual).toBe(1);
  });
});

