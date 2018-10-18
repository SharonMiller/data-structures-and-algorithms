'use strict';

class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(value, neighbors) {
    if (!value) {
      throw new Error('Must include a value');
    }
    this.vertices[value] = neighbors;
  }
  breadthFirstTraversal(vertex) {
    if (!vertex) {
      throw new Error('Must include a starting vertex');
    }
    let visited = [];
    let traverseQueue = [];

    traverseQueue.push(vertex);

    while (traverseQueue.length) {
      let visitedVertex = traverseQueue.shift();
      if (!visited.includes(visitedVertex)) {
        visited.push(visitedVertex);
      }
      this.vertices[visitedVertex].forEach(neighbors => {
        if (!visited.includes(neighbors)) {
          traverseQueue.push(neighbors);
        }
      });
    }

    console.log(visited);
    return visited;
  }
}
module.exports = Graph;

//neighbors.forEach((element))

//check for uniquness
//throw error if no value
//ensure neighbors are in graph add if not
//if neighbor[i] not in graph - addvertext(nieghbor[i], value)
